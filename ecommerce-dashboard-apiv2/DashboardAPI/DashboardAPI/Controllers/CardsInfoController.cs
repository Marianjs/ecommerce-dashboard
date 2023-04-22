using Microsoft.AspNetCore.Mvc;
using MediatR;
using DashboardAPI.Application.InfoCards.Queries.GetRevenueCardInfo;
using DashboardAPI.Application.InfoCards.Queries.GetTotalOrdersCardInfo;

namespace DashboardAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardsInfoController : ControllerBase
    {
        private readonly IMediator _mediator;
        public CardsInfoController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        [Route("GetRevenueInfoCard")]
        public async Task<IActionResult> GetRevenueInfoCard([FromQuery] GetRevenueInfoCardQuery query)
        {
            return Ok(await _mediator.Send(query));
        }

        [HttpGet]
        [Route("GetTotalOrdersInfoCard")]
        public async Task<IActionResult> GetTotalOrdersInfoCard([FromQuery] GetTotalOrdersCardInfoQuery query)
        {
            return Ok(await _mediator.Send(query));
        }
    }
}