# Generated by Django 3.2.9 on 2021-12-20 21:16

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('emailsafe_api', '0013_auto_20211220_1940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailitem',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 20, 21, 16, 48, 719804, tzinfo=utc)),
        ),
    ]
