using AngularPlayground.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularPlayground.Controllers
{
    public class BooksController : ApiController
    {
        [HttpGet]
        public List<Book> GetAll()
        {
            return new List<Book>{
                new Book{
                    Name = "Lord of the rings: The return of the king",
                    Author = "J.R.R. Tolkien"
                },
                new Book{
                    Name = "1984",
                    Author = "George Orwel"
                }
            };
        }

        [HttpPost]
        public void Save(Book book)
        {

        }
    }

    
}
