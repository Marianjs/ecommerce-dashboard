﻿namespace DashboardAPI.Services.Exceptions
{
    public class BadRequestException : Exception
    {
        public BadRequestException() 
        {
        }
        public BadRequestException(string message) : base(message)
        {
        }
        public BadRequestException(string message, Exception inner) : base(message, inner)
        {
        }
        public BadRequestException(System.Runtime.Serialization.SerializationInfo info, System.Runtime.Serialization.StreamingContext context) 
            : base(info, context)
        {
        }
    }
}
