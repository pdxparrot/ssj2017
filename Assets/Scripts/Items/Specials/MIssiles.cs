﻿using System;

namespace CatFight.Items.Specials
{
    [Serializable]
    public sealed class Missiles : Special
    {
        public override string SpecialType => SpecialTypeMissiles;

        public Missiles(int totalUses)
            : base(totalUses)
        {
        }

        protected override void DoUse()
        {
// TODO
        }
    }
}
