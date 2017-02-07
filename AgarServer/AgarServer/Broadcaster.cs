using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Web;

namespace AgarServer
{
    public class Broadcaster
    {
        private Player player;
        private IHubContext context;

        public Broadcaster(Player player, Position mousePosition)
        {
            this.MousePosition = mousePosition;
            this.player = player;
            Task.Run(UpdatePlayer);
            context = GlobalHost.ConnectionManager.GetHubContext<PlayerHub>();
        }

        public Position MousePosition{ get; set; }

        public async Task UpdatePlayer()
        {
            while (true)
            {
                player.Position = Movement.GetNewPosition(player, MousePosition);
                context.Clients.All.updatePlayer(player);

                Thread.Sleep(50);
            }
        }
    }
}