using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CertificateNumberGenerator.Models
{
    public class APIDBContext:DbContext
    {
        public APIDBContext(DbContextOptions<APIDBContext> options) : base(options) { }
        public DbSet<CertificationScheme> CertificationSchemes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<CertificationScheme>()
                .HasKey(c => new { c.name, c.prefix,c.number,c.suffix });
        }
    }
}
