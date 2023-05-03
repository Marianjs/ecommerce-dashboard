using DashboardAPI.Services.Exceptions;
using MediatR;

namespace DashboardAPI.Application.Customers.Commands
{
    public class DeleteCustomerCommand : IRequest<Unit>
    {
        public int CustomerId { get; set; }

        public class Handler : IRequestHandler<DeleteCustomerCommand, Unit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
            {
                var customer = await _context.Customers.FindAsync(request.CustomerId, cancellationToken);

                if (customer == null)
                    throw new BadRequestException("Customer not found!");

                _context.Customers.Remove(customer);
                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
