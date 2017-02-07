using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AgarServer
{
    public class Movement
    {
        private const int moveCount = 1;

         public static Position GetNewPosition(Player player, Position inputPosition)
        {
            if (player.Position.Top == inputPosition.Top && player.Position.Left == inputPosition.Left)
            {
                return inputPosition;
            }

            double speed = 700;
            double elapsed = 0.01f;

            double distance = Math.Sqrt(
                Math.Pow(inputPosition.Left - player.Position.Left,2) +
                Math.Pow(inputPosition.Top - player.Position.Top, 2));
            double directionX = (inputPosition.Left - player.Position.Left) / distance;
            double directionY = (inputPosition.Top - player.Position.Top) / distance;

            Position newPosition = new Position(player.Position.Top, player.Position.Left);

            bool moving = true;

            
            if (moving == true)
            {
                newPosition.Left += directionX * speed * elapsed;
                newPosition.Top += directionY * speed * elapsed;
                if (Math.Sqrt(Math.Pow(newPosition.Left - player.Position.Left, 2)
                   + Math.Pow(newPosition.Top - player.Position.Top, 2)) >= distance)
                {
                    newPosition.Left = inputPosition.Left;
                    newPosition.Top = inputPosition.Top;
                    moving = false;
                }
            }

            return newPosition;
        }

        //public static Position GetNewPosition(Player player, Position inputPosition)
        //{
        //    Position newPosition = new Position();
        //    if (inputPosition.Top < player.Position.Top)
        //    {
        //        newPosition.Top = player.Position.Top + (moveCount * -1);
        //    }
        //    else
        //    {
        //        newPosition.Top = player.Position.Top + moveCount;
        //    }

        //    if (inputPosition.Left < player.Position.Left)
        //    {
        //        newPosition.Left = player.Position.Left + (moveCount * -1);
        //    }
        //    else
        //    {
        //        newPosition.Left = player.Position.Left + moveCount;
        //    }

        //    return newPosition;
        //}
    }
}