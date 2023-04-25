using DashboardAPI.Application.Orders.Queries.GetOrders;
using DashboardAPI.Application.Pagination;
using DashboardAPI.Services.Exceptions;
using MediatR;
using MediatR.Pipeline;

namespace DashboardAPI.Application.Customers.Commands
{
    public class EditCustomerCommand : IRequest<Unit>
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }

        public class Handler : IRequestHandler<EditCustomerCommand, Unit>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Unit> Handle(EditCustomerCommand request, CancellationToken cancellationToken)
            {
                var customer = await _context.Customers.FindAsync(request.CustomerId, cancellationToken);

                if (customer == null)
                    throw new BadRequestException("Customer not found!");

                customer.FirstName = request.FirstName;
                customer.LastName = request.LastName;
                customer.Email = request.Email;
                customer.Phone= request.Phone;
                customer.Address = request.Address;

                await _context.SaveChangesAsync(cancellationToken);

                return Unit.Value;
            }
        }
    }
}
