# Generated by Django 4.0.3 on 2023-03-06 22:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(default=1, max_length=200, unique=True),
            preserve_default=False,
        ),
    ]
