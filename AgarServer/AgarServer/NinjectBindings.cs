using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AgarServer
{
    public class NinjectBindings : NinjectModule
    {   
        public override void Load()
        {
            Bind<IColorGenerator>().To<ColorGenerator>();
        }
    }
}