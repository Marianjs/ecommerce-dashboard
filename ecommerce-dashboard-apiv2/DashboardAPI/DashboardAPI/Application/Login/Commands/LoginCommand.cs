using DashboardAPI.Entities;
using DashboardAPI.Services.Exceptions;
using MediatR;

namespace DashboardAPI.Application.Login.Commands
{
    public class LoginCommand : IRequest<Unit>
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public class Handler : IRequestHandler<LoginCommand, Unit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(LoginCommand request, CancellationToken cancellationToken)
            {
                if (string.IsNullOrEmpty(request.Email))
                    throw new BadRequestException("Va rugam sa introduceti un email!");

                if (string.IsNullOrEmpty(request.Password))
                    throw new BadRequestException("Va rugam sa introduceti o parola!");

                var userEmail = await _context.Accounts
                    .Where(w => w.Email == request.Email)
                    .FirstOrDefaultAsync(cancellationToken);

                if (userEmail == null)
                    throw new BadRequestException("Email-ul introdus este gresit!");

                var userPassword = await _context.Accounts
                    .Where(w => w.Password == request.Password)
                    .FirstOrDefaultAsync(cancellationToken);

                if (userPassword == null)
                    throw new BadRequestException("Parola introdusa este gresita!");

                return Unit.Value;
            }
        }
    }
}
