from django.db import models

# Create your models here.
class AutomobileVO(models.Model):
    vin = models.CharField(max_length=20, unique=True)
    year = models.IntegerField()
    color = models.CharField(max_length=20)
    model = models.CharField(max_length=20)
    import_href = models.CharField(max_length=200, unique=True)

class SalesPerson(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.CharField(max_length=100)

class Customer(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=50)

class SaleRecord(models.Model):
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sale_record",
        on_delete=models.CASCADE
    )

    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sale_record",
        on_delete=models.CASCADE
    )

    customer = models.ForeignKey(
        Customer,
        related_name="sale_record",
        on_delete=models.CASCADE
    )

    sale_price = models.IntegerField()
