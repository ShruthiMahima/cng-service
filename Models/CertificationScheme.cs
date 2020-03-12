using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace CertificateNumberGenerator.Models
{
    public class CertificationScheme
    {

        [Column(TypeName = "CHARACTER VARYING(100)")]
        public string name { get; set; }      

        [Column(TypeName = "CHARACTER VARYING(20)")]
        public string prefix { get; set; } 

        [Column(TypeName = "CHARACTER VARYING(20)")]
        public string suffix { get; set; }

        [Column(TypeName = "CHARACTER VARYING(30)")]
        public string number { get; set; }
        [Column(TypeName = "CHARACTER VARYING(250)")]
        public string description { get; set; }
    }

    public class CertificationSchemeResponse
    {
        public string name { get; set; }
        public string prefix { get; set; }
        public string suffix { get; set; }
        public string number { get; set; }
        public string description { get; set; }
        public int totalRecords { get; set; }
    }
}
