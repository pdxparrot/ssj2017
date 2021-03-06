using CatFight.Data;

using UnityEngine;

namespace CatFight.Fighters.Loadouts
{
    public sealed class WeaponLoadoutSlotItem : LoadoutSlotItem
    {
        [SerializeField]
        private WeaponData.WeaponType _type;

        public WeaponData.WeaponType Type => _type;

        [SerializeField]
        private Transform _ammoTransform;

        public Transform AmmoTransform => _ammoTransform;
    }
}
