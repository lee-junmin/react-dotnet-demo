using System;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Workshops.Commands;

public class EditWorkshop
{
    public class Command : IRequest
    {
        public required Workshop Workshop { get; set; }
    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var workshop = await context.Workshops
                .FindAsync([request.Workshop.Id], cancellationToken) 
                    ?? throw new Exception("Cannot find workshop");

            mapper.Map(request.Workshop, workshop);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
