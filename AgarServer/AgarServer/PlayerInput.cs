using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AgarServer
{
    public class PlayerInput
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("mouseLeft")]
        public int MouseLeft { get; set; }

        [JsonProperty("mouseTop")]
        public int MouseTop { get; set; }
    }
}