using System.ComponentModel.DataAnnotations;

namespace Introduccion.Models.Cine.DTO
{
    public class CreateCineDTO
    {
        [Required(ErrorMessage = "El nombre es obligatorio")]
        [MaxLength(30, ErrorMessage = "El nombre no puede contener más de 30 caracteres :P")]
        public string Name { get; set; } = null!;

        [MaxLength(255, ErrorMessage = "La descripción no puede contener más de 255 caracteres :P")]
        public string? Description { get; set; }

        [Required(ErrorMessage = "El estado de apertura es obligatorio")]
        public bool IsOpen { get; set; }
    }
}
