# Generated by Django 4.0.3 on 2023-03-07 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_salerecord_sale_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salerecord',
            name='sale_price',
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
