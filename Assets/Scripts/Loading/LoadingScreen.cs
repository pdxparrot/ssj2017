using CatFight.UI;
using CatFight.Util;

using UnityEngine;
using UnityEngine.UI;

namespace CatFight.Loading
{
    public sealed class LoadingScreen : MonoBehavior
    {
        [SerializeField]
        private ProgressBar _progressBar;

        public ProgressBar Progress => _progressBar;

        [SerializeField]
        private Text _progressText;

        public string ProgressText
        {
            get { return _progressText.text; }

            set { _progressText.text = value; }
        }
    }
}
