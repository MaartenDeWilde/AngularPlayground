using AngularPlayground.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace AngularPlayground.Controllers
{
    public class BooksController : ApiController
    {
        public BooksController()
        {
            if (HttpContext.Current.Application["books"] == null)
            {
                HttpContext.Current.Application["books"] = new List<Book>{
                new Book{
                    Name = "Lord of the rings: The return of the king",
                    Author = "J.R.R. Tolkien"
                },
                new Book{
                    Name = "1984",
                    Author = "George Orwel"
                }};
            }
        }


        [HttpGet]
        public List<Book> GetAll()
        {
            return (List<Book>)HttpContext.Current.Application["books"];
        }

        [HttpPost]
        public void Save(Book book)
        {
            ((List<Book>)HttpContext.Current.Application["books"]).Add(book);
        }
    }


}
