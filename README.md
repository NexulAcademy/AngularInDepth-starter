# AngularInDepth-starter

A companion repo to the Nexul Academy Angular courses found here: https://www.nexulacademy.com/courseware

* Angular Fundamentals
* Angular Advanced


## Setup OAuth

Create a google app with these instructions and put the credentials in appsettings.development.json

https://learn.microsoft.com/en-us/aspnet/core/security/authentication/social/google-logins?view=aspnetcore-3.1


## To run this C# API:

1. Open in Visual Studio 2022
2. Set startup project to "SimpleCrm.Web.Api"
3. Press F5, or "Run"
4. An error page appears, a 404 page is missing where the Angular app you will build will load later. 
5. Navigate to /home to see the C# MVC home page.

During the advanced course, OAuth lessons you will connect this C# API to your Angular app. Then the Angular run output will appear at the localhost root.

The Angular project built during class should be added in the repo root folder and be called 'simple-crm-cli'
