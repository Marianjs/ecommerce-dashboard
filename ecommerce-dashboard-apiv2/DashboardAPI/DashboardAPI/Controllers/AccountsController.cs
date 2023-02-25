using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.Registration.Commands;

namespace DashboardAPI.Controllers
{
    //[Authorize(Roles = Roles.SuperAdminOrEmployee)]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        //[HttpGet]
        ////[HasOneOf(Permissions = new []{Permissions.CustomersModule.Read, Permissions.CustomersModule.Admin})]
        //[Authorize(Permissions.CustomersModule.Read)]
        //[Route("GetAll")]
        //public async Task<IActionResult> GetAll([FromQuery] GetPartnersQuery query)
        //{
        //    return Ok(await Mediator.Send(query));
        //}  

        private readonly IMediator _mediator;
        public AccountsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        //[Authorize(Permissions.CustomersModule.Write)]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAccount([FromBody] CreateAccountCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        //[HttpPut]
        //[Authorize(Permissions.CustomersModule.Write)]
        //[Route("Update")]
        //public async Task<IActionResult> Update([FromQuery] int partnerId, [FromBody] UpdatePartnerCommand command)
        //{
        //    command.PartnerId = partnerId;
        //    await Mediator.Send(command);

        //    return NoContent();
        //}

        //[HttpDelete]
        //[Authorize(Permissions.CustomersModule.Write)]
        //[Route("Delete")]
        //public async Task<IActionResult> DeleteClient([FromQuery] DeleteClientCommand command)
        //{
        //    return Ok(await Mediator.Send(command));
        //}
    }
}