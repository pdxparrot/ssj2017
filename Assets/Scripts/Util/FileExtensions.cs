using System.IO;

namespace CatFight.Util
{
    public static class FileExtensions
    {
        public static void DeleteUnityFile(string path)
        {
            File.Delete(path);

            if(File.Exists($"{path}.meta")) {
                File.Delete($"{path}.meta");
            }
        }
    }
}
