# Generated by Django 4.2.5 on 2023-10-07 07:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('enrollments', '0002_rename_user_enrollment_student'),
    ]

    operations = [
        migrations.RenameField(
            model_name='enrollment',
            old_name='student',
            new_name='user',
        ),
    ]
