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
			string connectionId = Context.ConnectionId;

			string userName = name;

			if (userName != null && userName.Length >= 1)
			{
				var u = new Users()
				{
					ConnectionId = connectionId,
					UserName = userName
				};

				if (u.ConnectionId != null && !CurrentConnections.Contains(u))
				{
					CurrentConnections.Add(u);
				}
			}
			//Clients.AllExcept(CurrentConnections.Where(x => x.ConnectionId == Context.ConnectionId).Select(x => x.ConnectionId).FirstOrDefault());
			Clients.All.broadcastMessage(name);
			Clients.Caller.renderGame();
		}


		public void CloseGame(string connectionId)
		{
			var user = CurrentConnections.FirstOrDefault(x => x.ConnectionId == connectionId);
			CurrentConnections.Remove(user);

			Clients.Caller.leaveGame();
		}

		readonly List<Users> CurrentConnections = new List<Users>();

		public override Task OnConnected()
		{


			return base.OnConnected();
		}

		public override Task OnDisconnected(bool stopCalled = false)
		{

			if (stopCalled)
			{
				CloseGame(Context.ConnectionId);
			}

		

			return OnDisconnected(stopCalled);
		}

	}

	public class Users
	{
		public string ConnectionId { get; set; }
		public string UserName { get; set; }
	}
}