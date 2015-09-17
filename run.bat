@echo off
FOR /f "delims=" %%A IN ('npm list -g nativescript') DO @SET NativeScriptString=%%A
Echo.%NativeScriptString% | findstr /C:"(empty)">nul && (call npm install -g nativescript)

FOR /f "delims=" %%A IN ('tns platform list') DO @SET PlatformsString=%%A
Echo.%NativeScriptString% | findstr /C:"android">nul && (call) || (call tns platform add android)

call tns run android --emulator
