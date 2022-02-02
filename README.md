# Emailsafe 

Video demo for CS50: https://youtu.be/_V0zo-OrB1o

Emailsafe is fullstack web application that makes it easy for someone with the computer literacy of a non-technical office worker to safely take advantage of more sophisticated tools to help identify regular or standard junk emails apart from more malicious phishing attempts. 

# Design

Emailsafe runs as two seperate Heroku applications divided into a frontend reactjs app on top of nodejs. The frontend app handles all the html/css/js and UI features of the application. All user authentication and registration as well as all report information for each user is provided by the backend.

The backend application is a django application using the django rest framework to create api endpoints for the frontend to handle all account creation and verification. The backend also serves up the reports to the frontend that populate when a user has reports associated with their account, and provides the email address for the users to send suspicious emails to. 

Once the cloudmailin api receives an email, it then sends all the contents of the email in a json file for processing by the backend. The backend then makes api calls to various security focused apis, currently in this implementation virustotal and checkfish. The responses from those calls then are processed and combined with the information from cloudmailin to generate a report, which is then available to the frontend of the application.



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

