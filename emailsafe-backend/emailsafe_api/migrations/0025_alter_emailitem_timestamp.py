# Generated by Django 3.2.9 on 2021-12-21 00:40

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('emailsafe_api', '0024_alter_emailitem_timestamp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='emailitem',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 21, 0, 40, 43, 259258, tzinfo=utc)),
        ),
    ]
