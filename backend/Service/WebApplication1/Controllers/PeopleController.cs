using Service.Context;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Service.Controllers
{
    [RoutePrefix("people")]
    public class PeopleController : ApiController
    {
        private DataContext _context = new DataContext();


        [HttpGet]
        public List<Person> List()
        {

            List<Person> list = new List<Person>();

            list = _context.People.ToList();

            return list;
        }

        [HttpPost]
        public string Add(Person person)
        {

            try
            {
                _context.People.Add(person);

                _context.SaveChanges();
                _context.People.LastOrDefault();



                return person.ID.ToString();

            }
            catch (Exception ex)
            {
                return ex.Message;
            }


            
        }

        [HttpPost]
        public List<Person> Edit(Person person)
        {
            List<Person> list = new List<Person>();

            list = _context.People.ToList();

            return list;
        }

        [HttpDelete]
        public List<Person> Delete(int id)
        {
            List<Person> list = new List<Person>();

            list = _context.People.ToList();

            return list;
        }

    }
}
