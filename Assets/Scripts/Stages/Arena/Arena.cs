using System;
using System.Collections;

using CatFight.AirConsole;
using CatFight.AirConsole.Messages;
using CatFight.Data;
using CatFight.Fighters;
using CatFight.Players;
using CatFight.Util;

using UnityEngine;
using UnityEngine.UI;

namespace CatFight.Stages.Arena
{
    public sealed class Arena : Stage
    {
        private const string GameStateKey = "gameState";

        public new static Arena Instance => (Arena)Stage.Instance;

#region Countdown
        [SerializeField]
        private int _countdownSeconds = 5;

        [SerializeField]
        private GameObject _countdownContainer;

        [SerializeField]
        private Text _countdownText;

        private DateTime _countdownEnd;
#endregion

#region Timer
        [SerializeField]
        private int _fightTimeSeconds = 120;

        [SerializeField]
        private Text _timerText;

        private DateTime _timerStart;
#endregion

        [SerializeField]
        [ReadOnly]
        private int _actualFightTimeSeconds;

        [SerializeField]
        [ReadOnly]
        private bool _isRoundOver;

        [SerializeField]
        private FighterSpawn[] _spawnPoints;

        [SerializeField]
        private FighterStatsCard _fighterStatsCardPrefab;

        [SerializeField]
        private LayoutGroup _fighterStatsContainer;

#region Game Over
        [SerializeField]
        private GameObject _gameOverContainer;

        [SerializeField]
        private Text _winnerText;

        [SerializeField]
        private int _gameOverSeconds = 5;
#endregion

#region Unity Lifecycle
        protected override void Start()
        {
            base.Start();

            _gameOverContainer.SetActive(false);

            _countdownText.text = _countdownSeconds.ToString();
            _timerText.text = _fightTimeSeconds.ToString();

            InitFighters();

            StartCoroutine(UpdateControllers());

            StartCountdown();
        }

        protected override void OnDestroy()
        {
            StopAllCoroutines();

            if(FighterManager.HasInstance) {
                FighterManager.Instance.Cleanup();
            }

            base.OnDestroy();
        }

        private void Update()
        {
            if(_isRoundOver) {
                return;
            }

            if(_countdownContainer.activeInHierarchy) {
                UpdateCountdown();
            } else {
                UpdateTimer();
            }

            if(FighterManager.Instance.AliveFighterCount() <= 1) {
                EndRound();
            }
        }
#endregion

        private void InitFighters()
        {
            FighterManager.Instance.InitFighters(_spawnPoints);
            foreach(Fighter fighter in FighterManager.Instance.Fighters) {
                FighterStatsCard fighterStatsCard = Instantiate(_fighterStatsCardPrefab, _fighterStatsContainer.transform);
                fighterStatsCard.Initialize(fighter);
            }
        }

        private IEnumerator UpdateControllers()
        {
            while(true) {
                yield return new WaitForSeconds(1.0f);

                AirConsoleManager.Instance.SetCustomDeviceStateProperty(GameStateKey, new GameState());
            }
        }

        private void EndRound()
        {
            _isRoundOver = true;
            GameStageManager.Instance.IsGameStarted = false;

            _gameOverContainer.SetActive(true);

            StartCoroutine(GameOverRoutine());
        }

        private IEnumerator GameOverRoutine()
        {
            yield return new WaitForSeconds(_gameOverSeconds);

            GameStageManager.Instance.LoadLobby();
        }

#region Countdown
        private void StartCountdown()
        {
            // plus 1 because frames
            _countdownEnd = DateTime.Now.AddSeconds(_countdownSeconds + 1);
        }

        private void UpdateCountdown()
        {
            TimeSpan countdownRemaining = _countdownEnd - DateTime.Now;
            if(countdownRemaining.TotalSeconds <= 0) {
                _countdownContainer.SetActive(false);
                StartTimer();
                return;
            }

            _countdownText.text = ((int)countdownRemaining.TotalSeconds).ToString();
        }
#endregion

#region Timer
        private void StartTimer()
        {
            GameStageManager.Instance.IsGameStarted = true;

            _timerStart = DateTime.Now;
            _actualFightTimeSeconds = _fightTimeSeconds;
        }

        private void UpdateTimer()
        {
            DateTime timerEnd = _timerStart.AddSeconds(_actualFightTimeSeconds);
            TimeSpan timerRemaining = timerEnd - DateTime.Now;
            if(timerRemaining.TotalSeconds <= 0) {
                _timerText.text = "0";
                EndRound();
                return;
            }

            _timerText.text = ((int)timerRemaining.TotalSeconds).ToString();
        }
#endregion

        private void UseSpecial(int deviceId, SpecialData.SpecialType specialType)
        {
            Player player = PlayerManager.Instance.GetPlayer(deviceId);
            if(null == player) {
                Debug.LogError($"No such player {deviceId}!");
                return;
            }

            Fighter fighter = FighterManager.Instance.GetFighter(player.Team.Id);
            if(null == fighter) {
                Debug.LogError($"No fighter for team {player.Team.Id}!");
                return;
            }
            fighter.Stats.UseSpecial(specialType);
        }

#region Event Handlers
        protected override void MessageEventHandler(object sender, MessageEventArgs evt)
        {
            switch(evt.Message.type)
            {
            case Message.MessageType.UseSpecial:
                UseSpecialMessage useSpecialMessage = (UseSpecialMessage)evt.Message;
                UseSpecial(evt.From, useSpecialMessage.SpecialType);
                break;
            default:
                Debug.LogWarning($"Ignoring unexpected message type {evt.Message.type} from {evt.From}");
                break;
            }
        }
#endregion
    }
}
