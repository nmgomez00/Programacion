namespace introduccion.Models
{
    public class Cine
    {
        public int Id { get; set; }
        public string Nombre { get; set; } = string.Empty;
        public string? descripcion { get; set; }

        public bool IsOpen { get; set; }
    }
}
