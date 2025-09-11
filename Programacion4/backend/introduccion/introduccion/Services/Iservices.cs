using introduccion.Models;

namespace introduccion.Services
{
    public interface Iservices<T> where T : class
    {
        List<T> GetAll();
    }
}
