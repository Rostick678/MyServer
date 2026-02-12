@echo off
echo Node.js...
echo.

REM ВАЖНО: Используем относительные пути, а не копирование!
set NODE_DIR=%~dp0nodejs

if not exist "%NODE_DIR%\node.exe" (
    echo ERROR: node.exe not founded %NODE_DIR%
    echo 
    pause
    exit /b 1
)

echo founded Node.js in: %NODE_DIR%
echo version: 
"%NODE_DIR%\node.exe" --version
echo.

echo cmd is working
echo.

REM Добавляем в PATH только для этой сессии
set PATH=%PATH%;%NODE_DIR%

REM Оставляем cmd открытой
cmd /k "cd /d "%~dp0" && echo Type 'exit'"