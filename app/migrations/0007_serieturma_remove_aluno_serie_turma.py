# Generated by Django 5.0.4 on 2024-05-22 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_delete_aviso'),
    ]

    operations = [
        migrations.CreateModel(
            name='SerieTurma',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('serie_turma', models.CharField(max_length=120)),
            ],
        ),
        migrations.RemoveField(
            model_name='aluno',
            name='serie_turma',
        ),
    ]
