using Service.Context;
using Service.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
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
        public Task<HttpResponseMessage> Add(Person person)
        {
            HttpResponseMessage response;
            try
            {
                //Email validate
                MailAddress m = new MailAddress(person.Email);
                //CEP validade
                Regex cepRegex = new Regex(@"[0-9]");



                if (person.ZIPCode.Length != 8 || !cepRegex.IsMatch(person.ZIPCode))
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "CEP deve conter 8 caracteres e possuir um valor válido");

                _context.People.Add(person);

                var value = _context.SaveChanges();

                response = Request.CreateResponse(HttpStatusCode.OK, String.Format("Usuário {0} criado com o ID {1}", person.Name, person.ID));

            }
            catch (DbUpdateException)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro ao adicionar usuário, verifique se todos os campos estão preenchidos corretamente");

            }
            catch (InvalidOperationException ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro de conexão informe à mensagem ao administrador do sistema: " + ex.Message);
            }
            catch (FormatException ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro de conexão\n" + ex.Message);
            }
            var tsc = new TaskCompletionSource<HttpResponseMessage>();
            tsc.SetResult(response);

            return tsc.Task;
        }

        [HttpPost]
        public Task<HttpResponseMessage> Get(Person model)
        {
            HttpResponseMessage response;

            try
            {
                if (model.ID == 0)
                {
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "Informe um ID válido");
                }
                else
                {

                    Person person = _context.People.Where(x => x.ID == model.ID).FirstOrDefault();

                    if (person == null)
                        response = Request.CreateResponse(HttpStatusCode.BadRequest, "Informe um ID válido");
                    else
                        response = Request.CreateResponse(HttpStatusCode.OK, person);
                }
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            var tsc = new TaskCompletionSource<HttpResponseMessage>();
            tsc.SetResult(response);

            return tsc.Task;

        }

        [HttpPost]
        public Task<HttpResponseMessage> Edit(Person model)
        {
            HttpResponseMessage response;
            try
            {
                //Email validate
                MailAddress m = new MailAddress(model.Email);
                //CEP validade
                Regex cepRegex = new Regex(@"[0-9]");

                if (model.ZIPCode.Length != 8 || !cepRegex.IsMatch(model.ZIPCode))
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "CEP deve conter 8 caracteres e possuir um valor válido");

                _context.Entry(model).State = System.Data.Entity.EntityState.Modified;

                response = Request.CreateResponse(HttpStatusCode.OK, String.Format("{0} atualizado com sucesso", model.Name));

            }
            catch (DbUpdateException)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro ao adicionar usuário, verifique se todos os campos estão preenchidos corretamente");

            }
            catch (InvalidOperationException ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro de conexão informe à mensagem ao administrador do sistema: " + ex.Message);
            }
            catch (FormatException ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, "Erro de conexão\n" + ex.Message);
            }


            var tsc = new TaskCompletionSource<HttpResponseMessage>();

            tsc.SetResult(response);

            return tsc.Task;
        }

        [HttpPost]
        public Task<HttpResponseMessage> Delete(Person model)
        {

            HttpResponseMessage response;
            try
            {

                if (model.ID == 0)
                {
                    response = Request.CreateResponse(HttpStatusCode.BadRequest, "Informe um ID válido");
                }
                else
                {

                    Person person = _context.People.Where(x => x.ID == model.ID).FirstOrDefault();

                    _context.People.Remove(person);

                    if (person == null)
                        response = Request.CreateResponse(HttpStatusCode.BadRequest, "Informe um ID válido");
                    else
                        response = Request.CreateResponse(HttpStatusCode.OK, person);
                }
            }
            catch (Exception ex)
            {
                response = Request.CreateResponse(HttpStatusCode.BadRequest, ex.Message);
            }

            var tsc = new TaskCompletionSource<HttpResponseMessage>();
            tsc.SetResult(response);

            return tsc.Task;
        }

    }
}
