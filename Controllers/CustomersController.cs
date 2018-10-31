using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

using BC_WebDemo.Models;

namespace BC_WebDemo.Controllers
{
    [Route("api/[controller]")] //web-osoite
    public class CustomersController : Controller
    {
        public List<Customers> GetCustomers()             
        {
            NorthwindContext context = new NorthwindContext();

            try
            {
                List<Customers> asiakkaat = (from c in context.Customers
                                             where c.Country == "Finland"
                                             orderby c.City
                                             select c).ToList();
                return asiakkaat;
            }
            finally
            {
                context.Dispose();
            }
        }
     
     
    }
}

        
        
    
    


