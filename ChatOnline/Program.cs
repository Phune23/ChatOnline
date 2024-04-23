using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authentication.Facebook;
using Microsoft.AspNetCore.Authentication.Google;
using ChatOnline.Data;
using ChatOnline.Hubs;
using System.Configuration;
var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;
var configuration = builder.Configuration;

builder.Services.AddControllersWithViews();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddDefaultTokenProviders()
    .AddDefaultUI()
    .AddEntityFrameworkStores<ApplicationDbContext>();

//services.AddAuthentication()
//    .AddFacebook(facebookOptions =>
//    {
//        facebookOptions.AppId = "1566279994211061";
//        facebookOptions.AppSecret = "3039f1628ff89f3da8584ea6a30a58b5"; 
//    })
//    .AddGoogle(googleOptions =>
//     {
//         googleOptions.ClientId = "39174888650-rr82ad6u2tf52ljrp778b8i3ndpu2ska.apps.googleusercontent.com";
//         googleOptions.ClientSecret = "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";
//     });
// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddSignalR();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();
app.MapHub<ChatHub>("/chatHub");
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}"
);
app.Run();
