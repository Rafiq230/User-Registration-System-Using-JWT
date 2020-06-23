using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UserRegistration_WebAPI_3._1.Models
{
    public class AppSettings
    {
        public string JWT_Secret_Token { get; set; }
        public string Client_Url { get; set; }
    }
}
