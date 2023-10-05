# Generated by Django 4.2.5 on 2023-10-04 17:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lessons', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='lesson',
            name='duration_minutes',
        ),
        migrations.AddField(
            model_name='lesson',
            name='duration',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
