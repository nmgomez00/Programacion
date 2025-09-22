using System;
using System.ComponentModel.DataAnnotations;

namespace Introduccion.Models.Cine.DTO;

public class UpdateCineDTO
{
    [MaxLength(30, ErrorMessage = "El nombre no puede contener más de 30 caracteres :P")]
    public string? Name { get; set; } = null!;

    [MaxLength(255, ErrorMessage = "La descripción no puede contener más de 255 caracteres :P")]
    public string? Description { get; set; }

    public bool? IsOpen { get; set; }
}
