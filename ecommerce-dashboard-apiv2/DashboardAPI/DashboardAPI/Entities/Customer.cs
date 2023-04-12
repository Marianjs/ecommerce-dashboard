﻿namespace DashboardAPI.Entities
{
    public class Customer
    {
        public int Id { get; set; }
        public string FirstName { get; set; }   
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}