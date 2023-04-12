namespace DashboardAPI.Entities
{
    public class Invoice
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public decimal Cost { get; set; }
        public Order Order { get; set; }
    }
}
