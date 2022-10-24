# AngularInDepth-starter

A companion repo to the Nexul Academy Angular courses found here: https://www.nexulacademy.com/courseware

* Angular Fundamentals
* Angular Advanced

This repo is for anyone taking only the Angular classes. If you are in the full-stack program, then you will complete the code in this repo during the C# portions of the program.

# Before you can start the Angular advanced content, complete setup

## 1. Setup OAuth

Create a google app with these instructions and put the credentials in appsettings.development.json

https://learn.microsoft.com/en-us/aspnet/core/security/authentication/social/google-logins?view=aspnetcore-3.1

## 2. Setup the Customer database

(Done) The EF migrations were already created for the C# models with this:
    ..\SimpleCrm.Web.Api> dotnet ef migrations add InitialCreate -p ../SimpleCrm.SqlDbServices/SimpleCrm.SqlDbServices.csproj -c SimpleCrmDbContext
   
(TODO) Run both migrations against your local database
    (from within a teminal in the Web api folder:)
    ..\SimpleCrm.Web.Api> dotnet ef database update -p ../SimpleCrm.SqlDbServices/SimpleCrm.SqlDbServices.csproj -c SimpleCrmDbContext
    
    ..\SimpleCrm.Web.Api> dotnet ef database update -p ../SimpleCrm.SqlDbServices/SimpleCrm.SqlDbServices.csproj -c CrmIdentityDbContext

If the commands say dotnet does not exist, then you are missing some command line tools. The fix can be foind here:

https://learn.microsoft.com/en-us/ef/core/cli/dotnet

to summarize, run this in the terminal:

    dotnet tool install --global dotnet-ef

# To run this C# API:

1. Open in Visual Studio 2022
2. Set startup project to "SimpleCrm.Web.Api"
3. Press F5, or "Run"
4. An error page appears, a 404 page is missing where the Angular app you will build will load later. 
5. Navigate to /home to see the C# MVC home page.

During the advanced course, OAuth lessons you will connect this C# API to your Angular app. Then the Angular run output will appear at the localhost root.

The Angular project built during class should be added in the repo root folder and be called 'simple-crm-cli'
