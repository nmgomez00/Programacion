using introduccion.Services;
namespace introduccion.Servicios
{
    
    public class CineServices : Iservices<Models.Cine>
    {
        private readonly List<Models.Cine> cines = new() { 
            new() {Id = 1, Nombre="Cinemark", IsOpen = true},
            new() {Id = 1, Nombre="Showcase", IsOpen = true},
            new() {Id = 1, Nombre="Hoyts", IsOpen = true},
            new() {Id = 1, Nombre="Come", IsOpen = true},


        };
        public List<Models.Cine> GetAll() => cines;
    }
}
