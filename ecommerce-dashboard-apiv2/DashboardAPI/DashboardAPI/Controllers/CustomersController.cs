using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.Customers.Queries;
using DashboardAPI.Application.Customers.Commands;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CustomersController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetCustomers")]
        public async Task<IActionResult> GetCustomers([FromQuery] GetCustomersQuery query)
        {
            return Ok(await _mediator.Send(query));
        }

        [HttpPut]
        [Route("EditCustomer")]
        public async Task<IActionResult> EditCustomer([FromBody] EditCustomerCommand command)
        {
            return Ok(await _mediator.Send(command));
        }
    }
}