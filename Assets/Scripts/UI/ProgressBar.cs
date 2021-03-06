using CatFight.Util;

using UnityEngine;
using UnityEngine.UI;

namespace CatFight.UI
{
    public sealed class ProgressBar : MonoBehavior
    {
        [SerializeField]
        private Image _background;

        [SerializeField]
        private Image _foreground;

        [SerializeField]
        private float _percent;

        public float Percent
        {
            get { return _percent; }

            set { _percent = Mathf.Clamp01(value); }
        }

        private void Update()
        {
            _foreground.fillAmount = Percent;
        }
    }
}
