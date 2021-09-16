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
            List<Product> products;
            if (String.IsNullOrEmpty(category))
            {
                products = ProductDAL.GetAllProducts();
                ViewData["Name"] = "Full";
            }
            else
            {
                products = ProductDAL.GetProductsByCategory(category);
                string lowerCase = category.ToLower();
                string firstChar = lowerCase[0].ToString().ToUpper();
                string mixedCase = firstChar + lowerCase.Substring(1);
                ViewData["Name"] = mixedCase;
            }
            return View(products);
        }

        public IActionResult Detail(int productnumber)
        {
            Product p = ProductDAL.GetProduct(productnumber);
            return View(p);
        }
    }
}
