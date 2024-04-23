using Microsoft.AspNetCore.Mvc;

namespace ChatOnline.Controllers
{
    public class CommunityChatController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
