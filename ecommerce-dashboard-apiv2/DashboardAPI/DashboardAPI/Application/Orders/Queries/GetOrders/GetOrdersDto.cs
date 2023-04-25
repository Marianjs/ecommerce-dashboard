using DashboardAPI.Entities;

namespace DashboardAPI.Application.Orders.Queries.GetOrders
{
    public class GetOrdersDto
    {
        public int OrderId { get; set; }
        public string CustomerName { get; set; }
        public DateTime DateOfOrder { get; set; }
        public DateTime DateOfDelivery { get; set; }
        public string Status { get; set; }
        public decimal TotalCost { get; set; }
        public Invoice Invoice { get; set; }
        public string Address { get; set; }

    }
}
