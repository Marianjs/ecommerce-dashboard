namespace DashboardAPI.Application.Pagination
{
    public class PaginatedData<T>
    {
        public IEnumerable<T> Data { get; set; }
        public int DataCount { get; set; }
    }

}
