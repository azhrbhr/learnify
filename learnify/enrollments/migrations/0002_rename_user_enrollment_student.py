# Generated by Django 4.2.5 on 2023-10-07 07:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('enrollments', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='enrollment',
            old_name='user',
            new_name='student',
        ),
    ]
