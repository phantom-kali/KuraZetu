# Generated by Django 5.2.1 on 2025-06-22 09:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0003_user_polling_center"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="expo_push_token",
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
