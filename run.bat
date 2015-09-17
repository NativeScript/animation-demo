@echo off
FOR /f "delims=" %%A IN ('npm list -g nativescript') DO @SET NativeScriptString=%%A
Echo.%NativeScriptString% | findstr /C:"(empty)">nul && (call npm install -g nativescript)
call tns install
call node node_modules\typescript\bin\tsc -p app
call tns run android
