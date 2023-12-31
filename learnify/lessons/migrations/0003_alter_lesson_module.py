# Generated by Django 4.2.5 on 2023-10-07 06:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('modules', '0003_alter_module_slug'),
        ('lessons', '0002_remove_lesson_duration_minutes_lesson_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lesson',
            name='module',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='lessons', to='modules.module'),
        ),
    ]
