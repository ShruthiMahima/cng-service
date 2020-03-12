using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CertificateNumberGenerator.Models;

namespace CertificateNumberGenerator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CertificationSchemesController : ControllerBase
    {
        private readonly APIDBContext _context;

        public CertificationSchemesController(APIDBContext context)
        {
            _context = context;
        }

        //// GET: api/CertificationSchemes
        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<CertificationScheme>>> GetCertificationSchemes()
        //{
        //    return await _context.CertificationSchemes.OrderBy(i => i.name).ToListAsync();
        //}

        //// GET: api/CertificationSchemes/5
        //[HttpGet("{id}")]
        //public async Task<ActionResult<CertificationScheme>> GetCertificationScheme(string id)
        //{
        //    var certificationScheme = await _context.CertificationSchemes.FindAsync(id);

        //    if (certificationScheme == null)
        //    {
        //        return NotFound();
        //    }

        //    return certificationScheme;
        //}

        // GET: api/CertificationSchemes/5
        [HttpGet]
        public async Task<List<CertificationScheme>> SearchCertificationScheme(int pageNo,int pageSize, string? pattern = "")
        {
            List<CertificationScheme> certificationScheme;

            if (string.IsNullOrEmpty(pattern))
            {
                /*certificationScheme = await _context.CertificationSchemes
                .FromSqlRaw("SELECT * FROM " +
                "\"CertificationSchemes\" C " +
                "ORDER BY C.NAME " +
                "LIMIT {1} " +
                "OFFSET ({0}-1)*{1} ",  pageNo, pageSize)
                .ToListAsync<CertificationScheme>();*/
                certificationScheme = await _context.CertificationSchemes
                    .OrderBy(c => c.name)
                    .Skip((pageNo - 1) * pageSize)
                    .Take(pageSize)
                    .ToListAsync<CertificationScheme>();
            }
            else
            {
                //pattern = "%" + pattern + "%";
                certificationScheme = await _context.CertificationSchemes.OrderBy(c => c.name)
                    .Where(c => 
                    c.name.Contains(pattern) | 
                    c.prefix.Contains(pattern) | 
                    c.suffix.Contains(pattern) | 
                    c.number.Contains(pattern) | 
                    string.Concat(c.prefix, c.number).Contains(pattern) | 
                    string.Concat(c.number, c.suffix).Contains(pattern) | 
                    string.Concat(string.Concat(c.prefix, c.number),c.suffix).Contains(pattern) | 
                    c.description.Contains(pattern))
                    .Skip((pageNo-1)*pageSize)
                    .Take(pageSize)
                    .ToListAsync< CertificationScheme>();



                /*certificationScheme = await _context.CertificationSchemes
                    .FromSqlRaw("SELECT * FROM " +
                    "\"CertificationSchemes\" C " +
                    "WHERE UPPER(C.NAME) LIKE {0} " +
                    "OR UPPER(C.PREFIX) LIKE {0} " +
                    "OR UPPER(C.SUFFIX) LIKE {0} " +
                    "OR C.NUMBER LIKE {0} " +
                    "OR CONCAT(UPPER(C.PREFIX), C.NUMBER, UPPER(C.SUFFIX)) LIKE {0} " +
                    "OR CONCAT(UPPER(C.PREFIX), C.NUMBER) LIKE {0} " +
                    "OR CONCAT (C.NUMBER, UPPER(C.SUFFIX)) LIKE {0} " +
                    "OR UPPER(C.DESCRIPTION) LIKE {0} " +
                    "ORDER BY C.NAME " +
                    "LIMIT {2} " +
                    "OFFSET ({1}-1)*{2} ", pattern, pageNo, pageSize)
                    .ToListAsync<CertificationScheme>();*/
            }
            return certificationScheme;
        }


        // PUT: api/CertificationSchemes/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCertificationScheme(string id, CertificationScheme certificationScheme)
        {
            if (id != certificationScheme.name)
            {
                return BadRequest();
            }

            _context.Entry(certificationScheme).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CertificationSchemeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CertificationSchemes
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<CertificationScheme>> PostCertificationScheme(CertificationScheme certificationScheme)
        {
            _context.CertificationSchemes.Add(certificationScheme);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CertificationSchemeExists(certificationScheme.name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCertificationScheme", new { id = certificationScheme.name }, certificationScheme);
        }

        // DELETE: api/CertificationSchemes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CertificationScheme>> DeleteCertificationScheme(string id)
        {
            var certificationScheme = await _context.CertificationSchemes.FindAsync(id);
            if (certificationScheme == null)
            {
                return NotFound();
            }

            _context.CertificationSchemes.Remove(certificationScheme);
            await _context.SaveChangesAsync();

            return certificationScheme;
        }

        private bool CertificationSchemeExists(string id)
        {
            return _context.CertificationSchemes.Any(e => e.name == id);
        }
    }
}
