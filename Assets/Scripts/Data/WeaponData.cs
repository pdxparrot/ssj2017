using System;
using System.Collections.Generic;
using System.ComponentModel;

using CatFight.Items.Weapons;
using CatFight.Util;
using CatFight.Util.ObjectPool;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

using UnityEngine;

namespace CatFight.Data
{
    [CreateAssetMenu(fileName="WeaponData", menuName="Cat Fight/Data/Items/Weapon Data")]
    [Serializable]
    public sealed class WeaponData : ScriptableObject
    {
#region UNITY_EDITOR
        [UnityEditor.MenuItem("Assets/Create/Cat Fight/Data/Items/Weapon Data")]
        private static void Create()
        {
            ScriptableObjectUtility.CreateAsset<WeaponData>();
        }
#endregion

// TODO: these should be extensions of WeaponType
        public static string GetAmmoPool(WeaponType weaponType)
        {
            return weaponType.GetDescription() + "-ammo";
        }

        public static string GetImpactPool(WeaponType weaponType)
        {
            return weaponType.GetDescription() + "-impact";
        }

        public enum WeaponType
        {
            [Description("none")]
            None,

            [Description("machinegun")]
            MachineGun,

            [Description("laser")]
            Laser
        }

        [Serializable]
        public sealed class WeaponDataEntry : ItemData
        {
            [SerializeField]
            private WeaponType _type = WeaponType.None;

            [JsonConverter(typeof(StringEnumConverter))]
            public WeaponType Type => _type;

            [SerializeField]
            [Range(0, 100)]
            private int _damage;

            [JsonIgnore]
            public int Damage => _damage;

            [SerializeField]
            [Range(0, 60000)]
            private int _cooldownMilliseconds;

            public int CooldownMilliseconds => _cooldownMilliseconds;

            [SerializeField]
            private Ammo _ammoPrefab;

            [JsonIgnore]
            public Ammo AmmoPrefab => _ammoPrefab;

            [SerializeField]
            private int _poolSize;

            [JsonIgnore]
            public int PoolSize => _poolSize;

            public override string ToString()
            {
                return $"Weapon({Id}: {Name} - {Type}, {Damage})";
            }
        }

        [SerializeField]
        private WeaponDataEntry[] _weapons;

        public IReadOnlyCollection<WeaponDataEntry> Weapons => _weapons;

        private readonly Dictionary<int, WeaponDataEntry> _entries = new Dictionary<int, WeaponDataEntry>();

        [JsonIgnore]
        public IReadOnlyDictionary<int, WeaponDataEntry> Entries => _entries;

        public void Initialize()
        {
            foreach(WeaponDataEntry entry in Weapons) {
                _entries.Add(entry.Id, entry);
                if(null != entry.AmmoPrefab) {
                    PoolAmmo(entry.Type, entry.AmmoPrefab, entry.PoolSize);
                }
            }
        }

        private void PoolAmmo(WeaponType weaponType, Ammo ammo, int poolSize)
        {
            PooledObject pooledObject = ammo?.GetComponent<PooledObject>();
            if(null != pooledObject) {
                ObjectPoolManager.Instance.InitializePool(GetAmmoPool(weaponType), pooledObject, poolSize);
            }

            if(null != ammo?.ImpactPrefab) {
                PoolImpact(weaponType, ammo.ImpactPrefab, poolSize);
            }
        }

        private void PoolImpact(WeaponType weaponType, Impact impact, int poolSize)
        {
            PooledObject pooledObject = impact?.GetComponent<PooledObject>();
            if(null != pooledObject) {
                ObjectPoolManager.Instance.InitializePool(GetImpactPool(weaponType), pooledObject, poolSize);
            }
        }
    }
}
