using Lab10_2CoffeeShop.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lab10_2CoffeeShop.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            List<Product> products = ProductDAL.GetAllProducts();
            return View(products);
        }

        public IActionResult EditItem(int id)
        {
            Product prod = ProductDAL.GetProduct(id);
            return View(prod);
        }

        public IActionResult UpdateProduct(Product prod)
        {
            ProductDAL.UpdateProduct(prod);
            return Redirect($"/Product/Detail?productnumber={prod.id}");
        }
    }
}
