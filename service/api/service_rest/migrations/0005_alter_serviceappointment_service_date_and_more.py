# Generated by Django 4.0.3 on 2023-03-06 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_alter_serviceappointment_service_date_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='serviceappointment',
            name='service_date',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='serviceappointment',
            name='time',
            field=models.DateTimeField(null=True),
        ),
    ]