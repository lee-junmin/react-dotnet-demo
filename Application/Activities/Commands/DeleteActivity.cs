using System;
using MediatR;
using Persistence;
using Domain;

namespace Application.Workshops.Commands;

public class DeleteWorkshop
{
    public class Command : IRequest
    {
        public required string Id { get; set;}    
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var workshop = await context.Workshops.FindAsync([request.Id], cancellationToken)
                ?? throw new Exception("No workshop found");
            context.Remove(workshop);
            await context.SaveChangesAsync(cancellationToken);

        }
    }

}
