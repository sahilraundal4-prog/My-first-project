# Timed Reader: APK project

Builds an installable Android APK on GitHub for free. No Android Studio needed.

## Steps
1. Create a free account at github.com and click New repository. Name it anything and click Create.
2. Upload everything from this folder to the repository (Add file > Upload files). Make sure the `.github` folder is included.
   If `.github` does not upload, click Add file > Create new file, type
   `.github/workflows/build-apk.yml` as the name, and paste in the contents of that file.
3. Open the Actions tab. The "Build APK" run starts by itself. If it doesn't, choose Build APK > Run workflow.
4. Wait about 5 to 10 minutes for a green check.
5. Open the finished run, scroll to Artifacts, and download `timed-reader-apk`. Unzip it to get `app-debug.apk`.
6. Copy the APK to your phone and open it. Allow "install from unknown sources" if asked.

The PDF engine is downloaded and bundled during the build, so the app works offline.
