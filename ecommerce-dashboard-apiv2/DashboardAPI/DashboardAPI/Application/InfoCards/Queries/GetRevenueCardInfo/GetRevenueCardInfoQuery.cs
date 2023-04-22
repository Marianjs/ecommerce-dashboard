using MediatR;

namespace DashboardAPI.Application.InfoCards.Queries.GetRevenueCardInfo
{
    public class GetRevenueInfoCardQuery : IRequest<GetTotalOrdersCardInfoDto>
    {
        public class Handler : IRequestHandler<GetRevenueInfoCardQuery, GetTotalOrdersCardInfoDto>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<GetTotalOrdersCardInfoDto> Handle(GetRevenueInfoCardQuery request, CancellationToken cancellationToken)
            {
                // the the total revenue from the current month orders
                var currentMonthRevenue = _context.Orders
                    .Where(w => w.Date.Month == DateTime.Now.Month)
                    .Sum(s => s.TotalCost);

                // the the total revenue from the previous month orders
                var previousMonthRevenue = _context.Orders
                    .Where(w => w.Date.Month == DateTime.Now.AddMonths(-1).Month)
                    .Sum(s => s.TotalCost);

                // compute the percentage difference between the 2 values
                var percentageValue = 0.0;

                if (previousMonthRevenue == 0)
                {
                    percentageValue = currentMonthRevenue == 0 ? 0 : 100;
                }
                else
                {
                    percentageValue = (double)((currentMonthRevenue - previousMonthRevenue) / previousMonthRevenue * 100);
                }

                return new GetTotalOrdersCardInfoDto()
                {
                    Value = currentMonthRevenue,
                    PercentageValue = (int)percentageValue
                };
            }
        }
    }
}
