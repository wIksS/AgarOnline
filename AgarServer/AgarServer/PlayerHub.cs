using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace AgarServer
{
    public class PlayerHub : Hub
    {
        private static Dictionary<string, Broadcaster> broadcasters = new Dictionary<string, Broadcaster>();

        public override Task OnDisconnected(bool stopCalled)
        {
            var player = GameEngine.Instance.Players.FirstOrDefault(p => p.Value.ConnectionId == Context.ConnectionId);
            if (player.Value != null)
            {
                GameEngine.Instance.Players.Remove(player.Key);
                Clients.AllExcept(Context.ConnectionId).removePlayer(player.Value);
            }

            return base.OnDisconnected(stopCalled);
        }       

        public void UpdatePlayer(PlayerInput input)
        {
            if (PlayerHub.broadcasters.ContainsKey(input.Id))
            {
                PlayerHub.broadcasters[input.Id].MousePosition = input.MousePosition;
            }
        }

        public void SpawnPlayer()
        {
            Player player = GameEngine.Instance.CreatePlayer(Context.ConnectionId);
            player.ConnectionId = Context.ConnectionId;
            Clients.AllExcept(Context.ConnectionId).spawnNewPlayer(player);
            Clients.Caller.spawnCurrentPlayer(player);
            var otherPlayers = GameEngine.Instance.GetOtherPlayers(player.Id);
            Clients.Caller.spawnOtherPlayers(otherPlayers);

            PlayerHub.broadcasters.Add(player.Id,new Broadcaster(player, new Position(0, 0)));
        }
    }
}   