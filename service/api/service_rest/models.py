from django.db import models
from django.urls import reverse

# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True, default = None)
    vin = models.CharField(max_length=200)
    color = models.CharField(max_length=200)
    year = models.CharField(max_length=200)

    def __str__(self):
        return self.vin

class Technician(models.Model):
    technician_name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200)

    def __str__(self):
        return self.technician_name

class ServiceAppointment(models.Model):
    name = models.CharField(max_length=200)
    service_date = models.DateTimeField(auto_now_add=True)
    reason = models.CharField(max_length=200)

    technician = models.ForeignKey(
        Technician,
        related_name="technician",
        on_delete=models.CASCADE,
    )

    identification = models.ForeignKey(
        AutomobileVO,
        related_name="identification",
        on_delete=models.CASCADE,
    )

    def get_api_url(self):
        return reverse("api_list_service_appointments", kwargs={"pk": self.pk})
