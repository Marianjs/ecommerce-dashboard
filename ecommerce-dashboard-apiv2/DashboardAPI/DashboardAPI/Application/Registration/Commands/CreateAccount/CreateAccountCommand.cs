using DashboardAPI.Entities;
using DashboardAPI.Services.Exceptions;
using MediatR;

namespace DashboardAPI.Application.Registration.Commands
{
    public class CreateAccountCommand : IRequest<int>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public class Handler : IRequestHandler<CreateAccountCommand, int>
        {
            private readonly DataContext _context;
            private readonly IMediator _mediator;
            public Handler(DataContext context, IMediator mediator)
            {
                _context = context;
                _mediator = mediator;
            }
            public async Task<int> Handle(CreateAccountCommand request, CancellationToken cancellationToken)
            {
                if (string.IsNullOrEmpty(request.FirstName))
                    throw new BadRequestException("Va rugam sa introduceti un prenume!");

                if (string.IsNullOrEmpty(request.LastName))
                    throw new BadRequestException("Va rugam sa introduceti un nume de familie!");

                if (string.IsNullOrEmpty(request.Email))
                    throw new BadRequestException("Va rugam sa introduceti un email!");

                if (string.IsNullOrEmpty(request.Password))
                    throw new BadRequestException("Va rugam sa introduceti o parola!");

                var users = await _context.Accounts.ToListAsync(cancellationToken);
                var isEmailAlreadyUsed = users.Any(a => a.Email == request.Email);

                if (isEmailAlreadyUsed)
                    throw new BadRequestException("Email-ul introdus este deja folosit!");

                var account = new Account()
                {
                    FirstName = request.FirstName,
                    LastName = request.LastName,
                    Email = request.Email,
                    Password = request.Password
                };

                await _context.Accounts.AddAsync(account, cancellationToken);
                await _context.SaveChangesAsync(cancellationToken);

                return account.Id;
            }
        }
    }
}
