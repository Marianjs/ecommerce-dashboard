using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.Orders.Queries;
using Microsoft.AspNetCore.Authorization;
using DashboardAPI.Application.InfoCards.Queries.GetRevenueCardInfo;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public OrdersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetOrders")]
        public async Task<IActionResult> GetOrders([FromQuery] GetOrdersQuery query)
        {
            return Ok(await _mediator.Send(query));
        }
    }
}