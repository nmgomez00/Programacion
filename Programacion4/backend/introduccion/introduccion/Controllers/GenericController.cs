using introduccion.Services;
using Microsoft.AspNetCore.Mvc;

// Clase base genérica para controladores
// Este es el "controlador genérico" que reutilizarás
[Route("api/all)]
[ApiController]
public abstract class GenericController<T> : ControllerBase where T : class
{
    protected readonly Iservices<T> _service;

    public GenericController(Iservices<T> service)
    {
        _service = service;
    }

    [HttpGet]
    public ActionResult<List<T>> Get()
    {
        var items = _service.GetAll();
        return Ok(items);
    }
}