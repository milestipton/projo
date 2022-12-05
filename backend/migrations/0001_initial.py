# Generated by Django 3.2.8 on 2022-12-02 15:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProjectAdmin',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('title', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, unique=True)),
                ('summary', models.CharField(max_length=100)),
                ('category', models.CharField(choices=[('swe', 'Software Enginnering'), ('mark', 'Marketing'), ('buz', 'Business Strategy'), ('des', 'Design')], max_length=20)),
                ('solve', models.CharField(default=None, max_length=300)),
                ('logo', models.ImageField(default=None, upload_to='uploads/')),
                ('contact', models.CharField(max_length=100)),
                ('date', models.DateTimeField(auto_now=True)),
                ('admin', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.projectadmin')),
            ],
        ),
    ]