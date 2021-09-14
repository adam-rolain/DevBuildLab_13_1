using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using Dapper;
using Dapper.Contrib.Extensions;
using Lab10_2CoffeeShop.Models;

namespace Lab10_2CoffeeShop.Controllers
{
    public class ProductController : Controller
    {
        public IActionResult Index()
        {
            MySqlConnection db = new MySqlConnection("Server=localhost;Database=coffeeshop;Uid=root;Password=abc123");
            List<Product> products = db.GetAll<Product>().ToList();
            return View(products);
        }

        public IActionResult Detail(int productnumber)
        {
            MySqlConnection db = new MySqlConnection("Server=localhost;Database=coffeeshop;Uid=root;Password=abc123");
            Product p = db.Get<Product>(productnumber);
            return View(p);
        }
    }
}
