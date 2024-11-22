# Generated by Django 5.1.2 on 2024-11-17 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('imod', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactFormSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100, verbose_name='First Name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email')),
                ('phone_number', models.CharField(max_length=15, verbose_name='Phone Number')),
                ('query', models.TextField(verbose_name='Query')),
                ('submitted_at', models.DateTimeField(auto_now_add=True, verbose_name='Submitted At')),
            ],
        ),
    ]
