using Microsoft.AspNetCore.Mvc;

namespace Portfolio_Zullo_Taccogna_Server.Dto
{
    [Route("api")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private static List<ContactForm> _contactsForm= new List<ContactForm>();

        [HttpGet("contacts")]
        public IActionResult GetContacts()
        {
            return Ok(_contactsForm);
        }



        [HttpPost("contacts")]
        public IActionResult SubmitForm([FromBody] ContactForm contattiForm)
        {
            if (contattiForm == null)
            {
                return BadRequest("I dati sono mancanti.");
            }
            Console.WriteLine($"Contatto ricevuto: Nome={contattiForm.Name}, Email={contattiForm.Email}, Messaggio={contattiForm.Message}");


            _contactsForm.Add(contattiForm);
            return Ok("Contatto ricevuto con successo!");
        }
    }
}
