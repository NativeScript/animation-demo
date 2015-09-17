# NativeScript animation demo application
Open source cross-platform animation demo app built with NativeScript.

Use this application to find-out how to implement common animation scenarios with NativeScript.

## Running the sample

1. Make sure you have the [NativeScript Command-line Interface](https://www.npmjs.com/package/nativescript) installed as well as all the prerequisites for the NativeScript development, described in the package page.

2. Install the dependencies of the sample (NativeScript modules and TypeScript compiler) and add the preferred platform-specific tools to the project library. Note that iOS development is only available with a Mac machine.

       `tns install`

3. Compile the TypeScript code

       `node_modules/typescript/bin/tsc -p ./app`

4. Run the project.

    `tns run ios|android [--emulator]`

    The `--emulator` keyword instructs the CLI to load the iOS simulator or an android emulator depending on the platform you want.

For convenience you can use the `run.bat`/`run.sh` scripts on a \*NIX/windows environment respectively. The `run.sh` script starts the sample in iOS when run on a Mac and Android on Linux/Windows. The `run.bat` script runs the sample on an Android emulator under Windows.

For \*NIX systems the following script runs the sample directly:

`curl https://raw.githubusercontent.com/NativeScript/animation-demo/master/run.sh | bash`
