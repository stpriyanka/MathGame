using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Owin;

namespace MathGameApp
{
	public class Startup
	{
		public void Configuration(IAppBuilder app)
		{
			app.MapSignalR("/signalr", new HubConfiguration());
		}
	}
}