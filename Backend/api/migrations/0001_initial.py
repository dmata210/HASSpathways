# Generated by Django 3.0.6 on 2020-06-10 18:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Courses',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('catagory', models.CharField(max_length=100)),
                ('code', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='pathways',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('desc', models.TextField()),
                ('classes', models.ManyToManyField(to='api.Courses')),
            ],
        ),
    ]
