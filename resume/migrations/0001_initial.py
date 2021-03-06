# Generated by Django 4.0.1 on 2022-01-22 07:48

import ckeditor.fields
from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Certificates',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField(verbose_name='serial_no')),
                ('link', models.URLField()),
                ('name', models.CharField(max_length=150)),
                ('is_verified', models.BooleanField(default=False)),
                ('months', models.PositiveIntegerField()),
                ('year', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField()),
                ('course', models.CharField(max_length=150)),
                ('board', models.CharField(max_length=150)),
                ('name', models.CharField(max_length=500)),
                ('marks', models.DecimalField(decimal_places=2, max_digits=4)),
                ('speciality', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField()),
                ('company', models.CharField(max_length=250)),
                ('role', ckeditor.fields.RichTextField()),
                ('designation', models.CharField(max_length=150)),
                ('months', models.PositiveIntegerField()),
                ('year', models.PositiveIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField(verbose_name='serial_no')),
                ('name', models.CharField(max_length=150)),
                ('link', models.URLField(verbose_name='link')),
            ],
        ),
        migrations.CreateModel(
            name='Social_links',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField(verbose_name='Serial_No')),
                ('github', models.URLField()),
                ('linkedin', models.URLField()),
                ('telegram', models.URLField()),
                ('facebook', models.URLField()),
                ('twitter', models.URLField()),
                ('whatsapp', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Resume',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sno', models.UUIDField(auto_created=True)),
                ('objective', ckeditor.fields.RichTextField()),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('primary_contact_no', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, verbose_name='contact_no')),
                ('secondary_contact_no', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, verbose_name='contact_no')),
                ('primary_email', models.EmailField(max_length=254)),
                ('alternative_email', models.EmailField(max_length=254)),
                ('address', models.CharField(max_length=500)),
                ('pin_code', models.PositiveIntegerField()),
                ('declaration', ckeditor.fields.RichTextField()),
                ('certificates', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.certificates')),
                ('education', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.education')),
                ('experience', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.experience')),
                ('link', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.link')),
                ('social_links', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='resume.social_links')),
            ],
        ),
    ]
