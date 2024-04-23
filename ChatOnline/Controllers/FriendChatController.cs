using Microsoft.AspNetCore.Mvc;

namespace ChatOnline.Controllers
{
    public class FriendChatController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
