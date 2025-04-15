
API --> Application --> Persistence 
              \             /
               ->  Domain <-
             
## project setup
- create a new solution file `dotnet new sln`
- make a new web api project `dotnet new webapi -n API -controllers`
- create classlib `dotnet new classlib -n Domain` and same for Persistence and Application
- need to add the projects to the solution `dotnet sln add API` and same for Persistence and Application. we can now see them in the solution explorer
- add references: right click on each project in the solution explorer and click "Add Project Reference"


## 8 domain
create entity called Activity and add properties
prop + enter will create a snippet
 <Nullable>enable</Nullable>  compiler warns you if a non-null variable is used before it’s set, or if a null might slip through. use string? for makin exception 
 how to make property required `public required string Description { get; set; }`

## 9 dbcontext 
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

## 10 migration
- builder.configuration should be looking into API appsettings.json for connection string
  - appsettings.Development.json will be the one used for dev mode
  - ✏️change logging level from Warning to Information at appsettings.json
  - ✏️ add "ConnectionString" to the appsettings
- install package for entity framework migration
  - search google dotnet ef nuget and copy the command to install dotnet-ef
  - ✏️ create migration: run at root `dotnet ef migrations add InitialCreate -p Persistence -s API`
  - update migration: `dotnet ef database update -p Persistence -s API`
  - delete database: `dotnet ef database drop -p Persistance -s API`
  
## 11 database seeding
- create new class DbInitializer.cs in Peristence project
  - create method [text](https://github.com/TryCatchLearn/Reactivities/blob/b9667a049b36b552dfebfdb87a0d1417a7cc9e65/Persistence/DbInitializer.cs)
- run the above SeedData method https://github.com/TryCatchLearn/Reactivities/blob/d3632a6efa06463808c7b56a77cbdd67bd11ddd7/API/Program.cs 

## 12 API controller
- [text](https://github.com/TryCatchLearn/Reactivities/blob/d3632a6efa06463808c7b56a77cbdd67bd11ddd7/API/Controllers/BaseApiController.cs)
- [text](https://github.com/TryCatchLearn/Reactivities/blob/d3632a6efa06463808c7b56a77cbdd67bd11ddd7/API/Controllers/ActivitiesController.cs)

# React Skeleton


- install vite (changes project to javascript)
- ✏️ create project in solution folder `npm create vite@latest` name client Typescript + SWC then follow instructions for npm install etc
- now we can access with localhost
- change port to 3000 at vite.config.ts [text](https://github.com/TryCatchLearn/Reactivities/blob/9fff80e8f77af8c67c77aa9fa403f02dcf68af2e/client/vite.config.ts)
- make the function simple at src/App.tsx
- install vscode extension ES7+React/Redux.. by dsznajder and ESLint by MS
- write hooks in App component [text](https://github.com/TryCatchLearn/Reactivities/blob/9fff80e8f77af8c67c77aa9fa403f02dcf68af2e/client/src/App.tsx)
- make /src/lib/types/index.d.ts file and use transform.tools/json-to-typescript
- install material ui and update app compoment to use it
- use https via vite `npm install -D vite-plugin-mkcert` and add plugin to the vite.config.ts file
- install axios

# CRUD with CQRS + Mediator Pattern
- install nuget package mediatr@Jimmy Bogard to Application project
- create folder Activities/Queries and create GetActivityList class with Query and Handler
- Move Mediator to the BaseApiController as a property and remove all constuctors
- add httppost to ActivitiesController
- edit activity: add to add EditActivity to Command folder and add HttpPut to Activities Controller
- Automapper: install AutoMapper@Jimmy Bogard to Application project
  