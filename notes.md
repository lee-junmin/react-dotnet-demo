
API --> Application --> Persistence 
              \             /
               ->  Domain <-
             
             


# 8 domain
create entity called Activity and add properties
prop + enter will create a snippet
 <Nullable>enable</Nullable>  compiler warns you if a non-null variable is used before it’s set, or if a null might slip through. use string? for makin exception 
 how to make property required `public required string Description { get; set; }`

 # 9 dbcontext 
- Install nuget packages: 
    Microsoft.EntityFrameworkCore.Sqlite for persistence project
    Microsoft.EntityFrameworkCore.Design for API project
    select the same version as .NET
- create AppDbContext.cs for Persistence project and derive from DbContext
    in domain AppDbContext class we need a DbSet property. DbSet is like a bridge connecting the code to the database. because we have nullable enabled we need to use required keyword
- API add the service 
    ```
    builder.Services.AddDbContext<AppDbContext>(opt => {
        opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    });
    ```
    from the above, we need to add the parameter `DbContextOptions options` and `DbContext(options)`

# 10 migration
- builder.configuration should be looking into API appsettings.json for connection string
  - appsettings.Development.json will be the one used for dev mode
  - ✏️change logging level from Warning to Information at appsettings.json
  - ✏️ add "ConnectionString" to the appsettings
- install package for entity framework migration
  - search google dotnet ef nuget and copy the command to install dotnet-ef
  - ✏️ create migration: run at root `dotnet ef migrations add InitialCreate -p Persistence -s API`
  - update migration: `dotnet ef database update -p Persistance -s API`
  - delete database: `dotnet ef database drop -p Persistance -s API`
  
# 11 database seeding
- create new class DbInitializer.cs in Peristence project
  - create method [text](https://github.com/TryCatchLearn/Reactivities/blob/b9667a049b36b552dfebfdb87a0d1417a7cc9e65/Persistence/DbInitializer.cs)
- run the above SeedData method https://github.com/TryCatchLearn/Reactivities/blob/d3632a6efa06463808c7b56a77cbdd67bd11ddd7/API/Program.cs 

# 12 API controller