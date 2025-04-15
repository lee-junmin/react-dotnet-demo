using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;
using Domain;


namespace Application.Workshops.Queries;

    public class GetWorkshopList
    {
        public class Query : IRequest<List<Workshop>>
        {

        }

        public class Handler(AppDbContext context) : IRequestHandler<Query, List<Workshop>>
        {
            public async Task<List<Workshop>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await context.Workshops.ToListAsync(cancellationToken);
            }

        }
    }

