using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.Registration.Commands;
using DashboardAPI.Application.Login.Commands;
using DashboardAPI.Application.ResetPassword;

namespace DashboardAPI.Controllers
{
    //[Authorize(Roles = Roles.SuperAdminOrEmployee)]
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IMediator _mediator;
        public AccountsController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        [Route("CreateAccount")]
        public async Task<IActionResult> CreateAccount([FromBody] CreateAccountCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginCommand command)
        {
            return Ok(await _mediator.Send(command));
        }

        [HttpGet]
        [Route("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromQuery] ResetPasswordQuery query)
        {
            return Ok(await _mediator.Send(query));
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