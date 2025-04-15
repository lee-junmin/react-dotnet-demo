
using Application.Workshops.Commands;
using Application.Workshops.Queries;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.Differencing;


namespace API.Controllers;

public class WorkshopsController: BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Workshop>>> GetWorkshops()
    {
        return await Mediator.Send(new GetWorkshopList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Workshop>> GetWorkshopDetail(string id)
    {
        return await Mediator.Send(new GetWorkshopDetails.Query{Id = id});
    }

    [HttpPost]
    public async Task<ActionResult<string>> CreateWorkshop(Workshop workshop)
    {
        return await Mediator.Send(new CreateWorkshop.Command{Workshop = workshop});
    }

    [HttpPut]
    public async Task<ActionResult> EditWorkshop(Workshop workshop)
    {
        await Mediator.Send(new EditWorkshop.Command{Workshop = workshop});
        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteWorkshop(string id)
    {
        await Mediator.Send(new DeleteWorkshop.Command{ Id = id });
        return Ok();

    }
}
