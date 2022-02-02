# Emailsafe 

Video demo for CS50: https://youtu.be/_V0zo-OrB1o

Emailsafe is fullstack web application that makes it easy for someone with the computer literacy of a non-technical office worker to safely take advantage of more sophisticated tools to help identify regular or standard junk emails apart from more malicious phishing attempts. 

## Installation

Backend setup

cd into the same level as manage.py

```bash

createdb emailsafe_db

python -m venv .env

source ./.env/bin/activate

pip install -r requirements.txt

python manage.py makemigrations

python manage.py makemigrations emailsafe_api

python manage.py migrate

python manage.py createsuperuser

```
Go to settings.py and look for comment with !SETUP-
Add your frontend URL to CORS_ALLOWED_ORIGINS

Go to the file "RENAME_ME_DURING_SETUP" and follow the directions in there

Push to heroku project:
```bash
heroku git:remote -a {app_name}
```

Setup Cloud Mail-in for heroku

Frontend

Go to src/globals.js and change the urls to match your own.

Replace the email with the email on Cloud Mail-in


## Notes

Thank you everyone in Code Platoon and the papa cohort!

This app uses Cloud Mail-in, VirusTotal, and CheckPhish APIs. 

Due to it's small database size and the current restrictions on API use on CheckPhish, the CheckPhish database is stored in it's entirety locally


