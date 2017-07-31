﻿using System.Collections.Generic;

namespace CatFight.Fighters
{
    public sealed class FighterState
    {
        public int teamId { get; }

        public float currentHealth { get; }

        private readonly Dictionary<string, int> _specialsRemaining = new Dictionary<string, int>();

        public IReadOnlyDictionary<string, int> specialsRemaining => _specialsRemaining;

        public FighterState(Fighter fighter)
        {
            teamId = fighter.Team.Id;
            currentHealth = fighter.Stats.CurrentHealth;

            foreach(var kvp in fighter.Stats.Specials) {
                _specialsRemaining.Add(kvp.Key.ToString(), kvp.Value.RemainingUses);
            }
        }
    }
}
