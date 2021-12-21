# Emailsafe 

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


## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

https://www.makeareadme.com/

## License
[MIT](https://choosealicense.com/licenses/mit/)