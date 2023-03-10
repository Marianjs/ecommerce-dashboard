using DashboardAPI.Services.Exceptions;
using MediatR;
using System.Net.Mail;
using System.Net;
using System.Text;
using System.Net.Http;

namespace DashboardAPI.Application.ResetPassword
{
    public class ResetPasswordQuery : IRequest<Unit>
    {
        public string Email { get; set; }
        public class Handler : IRequestHandler<ResetPasswordQuery, Unit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(ResetPasswordQuery request, CancellationToken cancellationToken)
            {
                if (string.IsNullOrEmpty(request.Email))
                    throw new BadRequestException("Please enter an email!");

                var user = await _context.Accounts
                    .FirstOrDefaultAsync(f => f.Email == request.Email, cancellationToken);

                if (user == null)
                    throw new BadRequestException("The email entered is not correct!");

                var resetPasswordToken = Convert.ToBase64String(Guid.NewGuid().ToByteArray())
                                                .Substring(0, 6)
                                                .Replace("/", "_")
                                                .Replace("+", "-");

                user.Password = resetPasswordToken;
                await _context.SaveChangesAsync(cancellationToken);

                //TODO: global path variable
                var emailContent = await File.ReadAllTextAsync("C:\\Users\\Marian\\Desktop\\MyProjects\\ecommerce-dashboard\\ecommerce-dashboard-apiv2\\DashboardAPI\\DashboardAPI\\Services\\Assets\\Templates\\ResetPasswordEmailTemplate.html", cancellationToken);

                emailContent = emailContent.Replace("[userName]", user.FirstName)
                                           .Replace("[resetPasswordToken]", resetPasswordToken);

                var email = "no.replyecommdashboard@gmail.com";
                var password = "nitjmlgrralxdamx";

                try
                {
                    var sender = new MailAddress(email, "Ecommerce Dashboard");
                    SmtpClient client = new SmtpClient("smtp.gmail.com", 587);
                    client.Credentials = new NetworkCredential(email, password);
                    client.EnableSsl = true;
                    client.Timeout = (60 * 5 * 1000);
                    client.DeliveryMethod = SmtpDeliveryMethod.Network;

                    MailMessage message = new MailMessage();
                    message.To.Add(request.Email);
                    message.From = sender;
                    message.Subject = "Ecommerce Dashboard - Reset your password";
                    message.IsBodyHtml = true;
                    message.Body = emailContent;

                    await client.SendMailAsync(message, cancellationToken);
                } catch(Exception ex)
                {
                    throw new BadRequestException(ex.Message);
                }     

                return Unit.Value;
            }
        }
    }
}
