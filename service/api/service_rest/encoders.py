from common.json import ModelEncoder
from service_rest.models import ServiceAppointment, Technician, AutomobileVO

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "year",
        ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "technician_name",
        "employee_number",
        "id"
        ]

class ListServicesEncoder(ModelEncoder):
    model = ServiceAppointment
    properties = [
        "name",
        "service_date",
        "reason",
        "time",
        "vin",
        "technician",
        "id"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "identification": AutomobileVOEncoder(),
    }
