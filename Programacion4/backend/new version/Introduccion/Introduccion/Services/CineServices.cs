using Introduccion.Models;
using Introduccion.Models.Cine;
using Introduccion.Models.Cine.DTO;
using Introduccion.Services;

namespace Introduccion.Services
{
    public class CineServices
    {
        public interface ICineServices
        {
            List<Models.Cine.DTO.CinesDTO> GetAll();
            Cine GetOneById(int id);
        }
        private List<Cine> cines = new() {
            new() { Id = 1, Name = "Cinemark", IsOpen = true },
            new() { Id = 2, Name = "Showcase", IsOpen = true },
            new() { Id = 3, Name = "Hoyts", IsOpen = true },
            new() { Id = 4, Name = "Cinepolis", IsOpen = false },
        };

        public List<Models.Cine.DTO.CinesDTO> GetAll()
        {
            return cines.Select(c => new Models.Cine.DTO.CinesDTO
            {
                Id = c.Id,
                Name = c.Name
            }).ToList();
        }
        public Cine GetOneById(int id)
        {
            var cine = cines.FirstOrDefault(c => c.Id == id);
            if (cine == null)
            {
                throw new Exception("Cine not found");
            }
            else
            {
                return cine;
            }
        }
    }

}

