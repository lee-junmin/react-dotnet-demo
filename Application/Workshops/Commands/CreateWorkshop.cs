using System;
using MediatR;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;

namespace Application.Workshops.Commands;

public class CreateWorkshop
{
    public class Command : IRequest<string>
    {
        public required Workshop Workshop { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            context.Workshops.Add(request.Workshop);
            await context.SaveChangesAsync(cancellationToken);
            return request.Workshop.Id;
        }
    }
}
