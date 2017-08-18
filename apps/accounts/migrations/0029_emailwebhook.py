# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2017-01-11 14:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0028_remove_userprofile_me_key'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailWebhook',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, default='', max_length=150)),
                ('status', models.CharField(blank=True, default='', max_length=30)),
                ('details', models.TextField(blank=True, default='', max_length=2048)),
                ('added', models.DateField(auto_now_add=True)),
            ],
        ),
    ]