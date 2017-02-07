﻿using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AgarServer
{
    public class GameEngine
    {
        private Dictionary<string, Player> players;
        private int counter = 0;
        private static GameEngine instance;
        private Random random;
        private IColorGenerator colorGenerator;

        [Inject]
        private GameEngine(IColorGenerator colorGenerator)
        {
            this.random = new Random();
            this.colorGenerator = colorGenerator;
            this.players = new Dictionary<string, Player>();
        }

        public static GameEngine Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new GameEngine(NinjectObjectFactory.GetObject<IColorGenerator>());
                }

                return instance;
            }
        }

        public Dictionary<string, Player> Players
        {
            get { return this.players; }
        }

        public List<Player> GetOtherPlayers(string id)
        {
            List<Player> otherPlayers = new List<Player>();
            foreach (var player in this.players)
            {
                if (player.Value.Id != id)
                {
                    otherPlayers.Add(player.Value);
                }
            }

            return otherPlayers;
        }

        public Player CreatePlayer(string id)
        {
            Position playerPosition = new Position(random.Next(0, 600), random.Next(0, 1300));
            Player player = new Player()
            {
                Position = playerPosition,
                Id = id,
                Color = this.colorGenerator.GetColor(),
                Radius = random.Next(0, 100);
            };

            players.Add(player.Id, player);
            counter++;

            return player;
        }

        public Player GetPlayer(string id)
        {
            return this.players[id];
        }
    }
}