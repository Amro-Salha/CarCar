# Generated by Django 4.0.3 on 2023-03-07 00:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_alter_serviceappointment_service_date_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='serviceappointment',
            name='vin',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
