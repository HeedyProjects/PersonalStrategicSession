## Install a development version

1. Install Android SDK or Xcode (depending on a target platform). For
   more info see [Getting Started ](https://facebook.github.io/react-native/docs/getting-started.html)
   section.

2. Install [Node.js](http://nodejs.org)

   - on OSX use [homebrew](http://brew.sh) `brew install node`
   - on Windows use [chocolatey](https://chocolatey.org/) `choco install nodejs`
   - on Debian based linux use `apt-get install nodejs npm`
   - or using nvm

3. Install react-native

   npm install -g react-native-cli

4. Go to the root project folder

   ```
   cd [project folder]
   ```

5. Install local dependence:

   ```
   yarn install
   ```

6. install pods

   ```
   cd ios
   pod install
   cd ..
   ```

7. Start the application
   ```
   react-native run-android
   ```
   or
   ```
   react-native run-ios
   ```
