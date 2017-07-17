﻿using CatFight.Util;

using NDream.AirConsole;

namespace CatFight
{
    public sealed class Lobby : SingletonBehavior<Lobby>
    {
        private void Start()
        {
            AirConsoleController.Instance.MessageEvent += MessageEventHandler;
        }

        protected override void OnDestroy()
        {
            if(AirConsoleController.HasInstance) {
                AirConsoleController.Instance.MessageEvent -= MessageEventHandler;
            }
        }

        private void MessageEventHandler(object sender, MessageEvent evt)
        {
            AirConsole.instance.Message(evt.From, "Hello World!");
        }
    }
}
