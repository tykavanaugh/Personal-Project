# Generated by Django 3.2.9 on 2021-12-20 19:23

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('emailsafe_api', '0009_auto_20211220_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailitem',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 20, 19, 23, 30, 136126, tzinfo=utc)),
        ),
    ]
