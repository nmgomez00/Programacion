using introduccion.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace introduccion.Controllers
{
    [Route("api/cines")]
    [ApiController]
    public class CineController : ControllerBase
    {
        private readonly CineServices _cineServices;
        public CineController()
        {
            _cineServices = new CineServices();
        }


        [HttpGet("check")]
        public ActionResult<List<Models.Cine>> get()
        {
            var cines = _cineServices.GetAll();
            return Ok(cines);
        }
    }
}
