using Microsoft.AspNetCore.Mvc;

namespace Api
{
    public class ValuesController : Controller
    {

        [HttpGet]
        [Route("/back")]
        public string Simpson()
        {
            DateTime now = DateTime.Now;
            var res = now.ToString();
            return res;
        }

    }
}
