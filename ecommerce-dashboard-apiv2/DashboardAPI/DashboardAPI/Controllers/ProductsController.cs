using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.Products.Queries;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public ProductsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetProducts")]
        public async Task<IActionResult> GetProducts([FromQuery] GetProductsQuery query)
        {
            return Ok(await _mediator.Send(query));
        }
    }
}