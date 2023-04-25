using DashboardAPI.Application.Orders.Queries.GetOrders;
using DashboardAPI.Application.Pagination;
using MediatR;

namespace DashboardAPI.Application.Orders.Queries
{
    public class GetOrdersQuery : IRequest<PaginatedData<GetOrdersDto>>
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public string? SearchText { get; set; }
        public string? StatusFilter { get; set; }
        public class Handler : IRequestHandler<GetOrdersQuery, PaginatedData<GetOrdersDto>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<PaginatedData<GetOrdersDto>> Handle(GetOrdersQuery request, CancellationToken cancellationToken)
            {
                var orders = _context.Orders.Select(s => s);

                if (!string.IsNullOrEmpty(request.SearchText))
                {
                    orders = orders.Where(w => 
                    w.Customer.FirstName != null && w.Customer.LastName != null &&
                    (w.Customer.FirstName + " " + w.Customer.LastName).Contains(request.SearchText));
                }

                if (!string.IsNullOrEmpty(request.StatusFilter))
                {
                    orders = orders.Where(w => w.Status == request.StatusFilter);
                }

                var pageIndex = request.PageIndex == 0 ? 1 : request.PageIndex;
                var pageSize = request.PageSize == 0 ? int.MaxValue : request.PageSize;

                var vm = await orders
                    .OrderByDescending(o => o.Id)
                    .Skip((pageIndex - 1) * pageSize)
                    .Take(pageSize)
                    .Select(s => new GetOrdersDto()
                    {
                        OrderId = s.Id,
                        CustomerName = s.Customer.FirstName + " " + s.Customer.LastName,
                        DateOfOrder = s.DateOfOrder,
                        DateOfDelivery = s.DateOfDelivery,
                        Status = s.Status,
                        TotalCost = s.TotalCost,
                        Address = s.Address,
                        Invoice = s.Invoice
                    })
                    .ToListAsync(cancellationToken);

                return new PaginatedData<GetOrdersDto>()
                {
                    Data = vm,
                    DataCount = await orders.CountAsync(cancellationToken)
                };
            }
        }
    }
}
