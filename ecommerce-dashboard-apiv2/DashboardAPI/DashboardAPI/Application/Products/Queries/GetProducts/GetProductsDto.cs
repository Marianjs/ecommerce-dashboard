namespace DashboardAPI.Application.Products.Queries.GetProducts
{
    public class GetProductsDto
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int CategoryId { get; set; }
        public string Image { get; set; }
    }
}
