using System;

using MediatR;
using Domain;
using Persistence;

namespace Application.Workshops.Queries;

public class GetWorkshopDetails
{
    public class Query : IRequest<Workshop>
    {
        public required string Id { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Query, Workshop>
    {
        public async Task<Workshop> Handle(Query request, CancellationToken cancellationToken)
        {
            var workshop = await context.Workshops.FindAsync([request.Id], cancellationToken);
            if (workshop == null) throw new Exception("Workshop not found");
            return workshop;
        }
    }
}
