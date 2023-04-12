using DashboardAPI.Services.Exceptions;
using MediatR;

namespace DashboardAPI.Application.Login.Commands
{
    public class LoginCommand : IRequest<string>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public class Handler : IRequestHandler<LoginCommand, string>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<string> Handle(LoginCommand request, CancellationToken cancellationToken)
            {
                if (string.IsNullOrEmpty(request.Email))
                    throw new BadRequestException("Va rugam sa introduceti un email!");

                if (string.IsNullOrEmpty(request.Password))
                    throw new BadRequestException("Va rugam sa introduceti o parola!");

                var user = await _context.Accounts
                    .Where(w => w.Email == request.Email)
                    .FirstOrDefaultAsync(cancellationToken);

                if (user == null)
                    throw new BadRequestException("The email entered is wrong!");

                if (user.Password != request.Password)
                    throw new BadRequestException("The password entered is wrong!");

                return user.FirstName + " " + user.LastName;
            }
        }
    }
}
