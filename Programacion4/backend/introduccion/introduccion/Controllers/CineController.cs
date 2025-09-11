using introduccion.Services;
using introduccion.Servicios;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace introduccion.Controllers
{
    [Route("api/cines")]
    [ApiController]
    public class CineController : ControllerBase
    {
        private readonly Iservices<Models.Cine> _cineServices;
        public CineController(Iservices<Models.Cine> cineServices)
        {
            _cineServices = cineServices;
        }


        [HttpGet]
        public ActionResult<List<Models.Cine>> get()
        {
            var cines = _cineServices.GetAll();
            return Ok(cines);
        }
    }
}
