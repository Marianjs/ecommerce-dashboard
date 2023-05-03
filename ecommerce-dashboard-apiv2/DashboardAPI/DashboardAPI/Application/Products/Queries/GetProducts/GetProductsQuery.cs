using DashboardAPI.Application.Pagination;
using DashboardAPI.Application.Products.Queries.GetProducts;
using MediatR;

namespace DashboardAPI.Application.Products.Queries
{
    public class GetProductsQuery : IRequest<PaginatedData<GetProductsDto>>
    {
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public int? CategoryId { get; set; }
        public class Handler : IRequestHandler<GetProductsQuery, PaginatedData<GetProductsDto>>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<PaginatedData<GetProductsDto>> Handle(GetProductsQuery request, CancellationToken cancellationToken)
            {
                var products = _context.Products.Select(s => s);

                if (request.CategoryId != null)
                {
                    products = products.Where(w => w.CategoryId == request.CategoryId);
                }

                var pageIndex = request.PageIndex == 0 ? 1 : request.PageIndex;
                var pageSize = request.PageSize == 0 ? int.MaxValue : request.PageSize;

                var vm = await products
                    .OrderByDescending(o => o.Id)
                    .Skip((pageIndex - 1) * pageSize)
                    .Take(pageSize)
                    .Select(s => new GetProductsDto()
                    {
                        ProductId = s.Id,
                        Name = s.Name,
                        CategoryId = s.CategoryId,
                        Price = s.Price,
                        Image = s.Image
                    })
                    .ToListAsync(cancellationToken);

                return new PaginatedData<GetProductsDto>()
                {
                    Data = vm,
                    DataCount = await products.CountAsync(cancellationToken)
                };
            }
        }
    }
}
