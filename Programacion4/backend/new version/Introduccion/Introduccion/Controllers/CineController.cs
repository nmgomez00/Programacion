using Introduccion.Models;
using Introduccion.Models.Cine.DTO;
using Introduccion.Models.Cine;
using Introduccion.Services;
using Introduccion.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Introduccion.Controllers
{
    [Route("api/cines")]
    [ApiController()]
    public class CineController : ControllerBase
    {
        private readonly CineServices _services;
        public CineController(CineServices services)
        {
            _services = services;
        }

        [HttpGet]
        public ActionResult<List<Models.Cine.DTO.CinesDTO>> GetAll()
        {
            var cines = _services.GetAll();
            return Ok(cines);
        }
        [HttpGet("/api/characters/{id}")]
        [ProducesResponseType(typeof(Cine), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(HttpMessage), StatusCodes.Status404NotFound)]

        public ActionResult<Cine> GetOneById(int id)
        {
            try
            {
                var cine = _services.GetOneById(id);
                return Ok(cine);
            }
            catch (Exception ex)
            {
                return NotFound(new HttpMessage { Message = ex.Message });
            }
            catch
            {
                return StatusCode((int)HttpStatusCode.InternalServerError, new HttpMessage { Message = "Internal Server Error" });
            }
        }
    }
}
