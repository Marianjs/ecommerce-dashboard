using DashboardAPI.Application.Customers.Queries.GetCustomers;
using DashboardAPI.Application.Pagination;
using MediatR;

namespace DashboardAPI.Application.Customers.Queries
{
    public class GetCustomersQuery : IRequest<PaginatedData<GetCustomersDto>>
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public string? SearchText { get; set; }
        public class Handler : IRequestHandler<GetCustomersQuery, PaginatedData<GetCustomersDto>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<PaginatedData<GetCustomersDto>> Handle(GetCustomersQuery request, CancellationToken cancellationToken)
            {
                var customers = _context.Customers.Select(s => s);

                if (!string.IsNullOrEmpty(request.SearchText))
                {
                    customers = customers.Where(w => w.FirstName != null && w.LastName != null && (
                        w.FirstName + " " + w.LastName).Contains(request.SearchText));
                }

                var pageIndex = request.PageIndex == 0 ? 1 : request.PageIndex;
                var pageSize = request.PageSize == 0 ? int.MaxValue : request.PageSize;

                var vm = await customers
                    .OrderByDescending(o => o.Id)
                    .Skip((pageIndex - 1) * pageSize)
                    .Take(pageSize)
                    .Select(s => new GetCustomersDto()
                    {
                        Id = s.Id,
                        FirstName = s.FirstName,
                        LastName = s.LastName,  
                        Email = s.Email,
                        Phone = s.Phone,
                        Address = s.Address
                    })
                    .ToListAsync(cancellationToken);

                return new PaginatedData<GetCustomersDto>()
                {
                    Data = vm,
                    DataCount = await customers.CountAsync(cancellationToken)
                };
            }
        }
    }
}
