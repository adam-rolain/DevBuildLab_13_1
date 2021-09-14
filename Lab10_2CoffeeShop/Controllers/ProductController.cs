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
        public IActionResult Index(string category)
        {
            MySqlConnection db = new MySqlConnection("Server=localhost;Database=coffeeshop;Uid=root;Password=abc123");
            List<Product> products;
            if (String.IsNullOrEmpty(category))
            {
                products = db.GetAll<Product>().ToList();
                ViewData["Name"] = "Full";
            }
            else
            {
                products = db.Query<Product>("SELECT * FROM product WHERE category = @mycat", new { mycat = category }).ToList();
                string lowerCase = category.ToLower();
                string firstChar = lowerCase[0].ToString().ToUpper();
                string mixedCase = firstChar + lowerCase.Substring(1);
                ViewData["Name"] = mixedCase;
            }
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
