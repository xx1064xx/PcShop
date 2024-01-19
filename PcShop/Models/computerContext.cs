using Microsoft.EntityFrameworkCore;

namespace PcShop.Models
{
    public class computerContext : DbContext
    {
        public computerContext(DbContextOptions<computerContext> options) 
            : base(options)
        {
            
        }

        public DbSet<computer> Computers { get; set; } = null!;
    }
}
