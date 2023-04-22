using MediatR;

namespace DashboardAPI.Application.InfoCards.Queries.GetTotalOrdersCardInfo
{
    public class GetTotalOrdersCardInfoQuery : IRequest<GetTotalOrdersCardInfoDto>
    {
        public class Handler : IRequestHandler<GetTotalOrdersCardInfoQuery, GetTotalOrdersCardInfoDto>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<GetTotalOrdersCardInfoDto> Handle(GetTotalOrdersCardInfoQuery request, 
                CancellationToken cancellationToken)
            {
                // the the total orders from the current month orders
                var currentMonthTotalOrders = _context.Orders
                    .Where(w => w.Date.Month == DateTime.Now.Month)
                    .Count();

                // the the total revenue from the previous month orders
                var previousMonthTotalOrders = _context.Orders
                    .Where(w => w.Date.Month == DateTime.Now.AddMonths(-1).Month)
                    .Count();

                // compute the percentage difference between the 2 values
                var percentageValue = 0.0;

                if (previousMonthTotalOrders == 0)
                {
                    percentageValue = currentMonthTotalOrders == 0 ? 0 : 100;
                }
                else
                {
                    percentageValue = (double)((currentMonthTotalOrders - previousMonthTotalOrders) / previousMonthTotalOrders * 100);
                }

                return new GetTotalOrdersCardInfoDto()
                {
                    TotalOrders = currentMonthTotalOrders,
                    PercentageValue = (int)percentageValue
                };
            }
        }
    }
}
