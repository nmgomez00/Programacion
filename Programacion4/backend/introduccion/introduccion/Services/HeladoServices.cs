using introduccion.Models;
using introduccion.Services;

namespace introduccion.Models
{
    public class HeladoServices : Iservices<Models.Helado>
    {
        public List<Models.Helado> helados = new()
        {
            new() {Id = 1, Nombre="Chocolate", Precio=1500, hasAzucar=true},
            new() {Id = 2, Nombre="Vainilla", Precio=1200, hasAzucar=true},
            new() {Id = 3, Nombre="Frutilla", Precio=1300, hasAzucar=true},
            new() {Id = 4, Nombre="Dulce de leche", Precio=1600, hasAzucar=true},
            new() {Id = 5, Nombre="Limon", Precio=1400, hasAzucar=false},
            new() {Id = 6, Nombre="Menta granizada", Precio=1500, hasAzucar=true},
        };
        public List<Models.Helado> GetAll() => helados;

        public Models.Helado? GetHeladoById(int id) => helados.FirstOrDefault(h => h.Id == id);
        public List<Models.Helado> GetHeladosByPrice(decimal price) => helados.Where(h => h.Precio <= price).ToList();

    }
}
