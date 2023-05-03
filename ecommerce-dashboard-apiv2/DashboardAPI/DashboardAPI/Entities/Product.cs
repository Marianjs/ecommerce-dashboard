namespace DashboardAPI.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } 
        public decimal Price { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public string Image { get; set; }
    }
}
