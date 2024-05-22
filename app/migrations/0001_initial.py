# Generated by Django 5.0.4 on 2024-05-21 20:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Aviso',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mensagem', models.TextField()),
                ('data_aviso', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Materia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome_materia', models.CharField(max_length=120)),
                ('faltas', models.IntegerField(default=0)),
                ('notas', models.DecimalField(decimal_places=2, max_digits=5)),
            ],
        ),
        migrations.CreateModel(
            name='Aluno',
            fields=[
                ('id_aluno', models.AutoField(primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=120)),
                ('serie_turma', models.CharField(max_length=8)),
                ('data_matricula', models.DateField()),
                ('materias', models.ManyToManyField(to='app.materia')),
            ],
        ),
    ]
