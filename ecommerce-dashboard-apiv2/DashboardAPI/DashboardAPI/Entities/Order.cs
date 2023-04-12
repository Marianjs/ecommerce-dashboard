namespace DashboardAPI.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public DateTime Date { get; set; }
        public string Status { get; set; }
        public string PaymentMethod { get; set; }
        public decimal TotalCost { get; set; }
        public string Address { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public int InvoiceId { get; set; }
        public Invoice Invoice { get; set; }
    }
}
