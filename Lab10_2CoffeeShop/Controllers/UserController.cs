using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Lab10_2CoffeeShop.Models;

namespace Lab10_2CoffeeShop.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult UserConfirmation(UserInfo userInfo, string confirmPassword)
        {
            ViewData["ConfirmPassword"] = confirmPassword;
            return View(userInfo);
        }
    }
}
