#!/usr/bin/env bash
echo "Creating Virtual Env"
echo "===================="
echo ""

deactivate  &>/dev/null
pyvenv venv
source ./venv/bin/activate

echo ""
echo "Installing Python Dependencies"
echo "=============================="
echo ""

pip install --upgrade pip
pip install -r requirements.txt

echo ""
echo "Installing Javascript Dependencies"
echo "=================================="
echo ""

npm install

echo ""
echo "Congrats all dependencies installed"
echo "Grunt takes over from here, type - grunt build - to get started"
echo "You can type - python manage.py runserver -d - to start up the app"
echo ""