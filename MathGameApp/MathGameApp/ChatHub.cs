using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace MathGameApp
{
	public class ChatHub : Hub
	{
		public void Send(string name)
		{
			var u = new Users()
			{
				ConnectionId = Context.ConnectionId,
				UserName = name
			};
			CurrentConnections.Add(u);

			// Call the broadcastMessage method to update clients.
			Clients.All.broadcastMessage(name);
		}

		readonly List<Users> CurrentConnections = new List<Users>();

		public override Task OnConnected()
		{
			return base.OnConnected();
		}

		public override Task OnDisconnected(bool stopCalled)
		{
			//var connection = CurrentConnections.FirstOrDefault(x => x.ConnectionId == Context.ConnectionId);

			//if (connection != null)
			//{
			//	CurrentConnections.Remove(connection);
			//}

			return base.OnDisconnected(true);
		}
	}

	public class Users
	{
		public string ConnectionId { get; set; }
		public string UserName { get; set; }
	}
}