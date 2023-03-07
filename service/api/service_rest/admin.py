from django.contrib import admin
from .models import ServiceAppointment, Technician

# Register your models here.
@admin.register(ServiceAppointment)
class ServiceAppointmentAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'service_date', 'reason', 'technician', 'identification', "time"
        )

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    list_display = (
        'technician_name', 'employee_number'
        )
