# Generated by Django 3.2.9 on 2021-12-20 19:24

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('emailsafe_api', '0010_alter_emailitem_timestamp'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='report',
            name='attachment_missing',
        ),
        migrations.AddField(
            model_name='report',
            name='sender_email',
            field=models.CharField(blank=True, default='', max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='emailitem',
            name='timestamp',
            field=models.DateTimeField(default=datetime.datetime(2021, 12, 20, 19, 24, 41, 92684, tzinfo=utc)),
        ),
    ]
