namespace introduccion.Models
{
    public class Helado
    {
      public int Id { get; set; }
      public string Nombre { get; set; } = string.Empty;
      public decimal Precio { get; set; }
      public bool hasAzucar { get; set; }
    }
}
