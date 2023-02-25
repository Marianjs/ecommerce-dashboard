using System.Net;
using DashboardAPI.Services.Exceptions;

namespace DashboardAPI.Services.Exceptions
{
    public static class ExceptionStatusCodes
    {
        private static Dictionary<Type, HttpStatusCode> exceptionStatusCodes = new Dictionary<Type, HttpStatusCode>
        {
            { typeof(BadRequestException), HttpStatusCode.BadRequest }
        };

        public static HttpStatusCode GetExceptionStatusCode(Exception exception)
        {
            bool exceptionFound = exceptionStatusCodes.TryGetValue(exception.GetType(), out var statusCode);
            return exceptionFound ? statusCode : HttpStatusCode.InternalServerError;
        }
    }
}
