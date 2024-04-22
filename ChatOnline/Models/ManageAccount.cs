using System.ComponentModel.DataAnnotations;

namespace ChatOnline.Models
{
    public class ManageAccount
    {
        [Key]
        public int Id { get; set; }
        public string? FullName { get; set; }
    }
}
