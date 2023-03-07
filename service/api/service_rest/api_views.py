from django.shortcuts import render
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from django.http import JsonResponse
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


@require_http_methods(["GET", "POST"])
def api_list_service_appointments(request):
    if request.method == "GET":
        services = ServiceAppointment.objects.all()
        return JsonResponse(
            {"services": services},
            encoder=ListServicesEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            techid = Technician.objects.get(id=technician_id)
            content["technician"] = techid
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician id"},
                status=400,
            )

        newtech = ServiceAppointment.objects.create(**content)
        return JsonResponse(
            newtech,
            encoder=ListServicesEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def api_delete_appointment(request, id=None):
    if request.method == "DELETE":
        count, _ = ServiceAppointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})



@require_http_methods(["GET", "POST"])
def api_list_technician(request):
    if request.method == "GET":
        tech = Technician.objects.all()
        return JsonResponse(
            {"tech": tech},
            encoder=TechnicianEncoder,
        )
    else:
        content = json.loads(request.body)
        newtech = Technician.objects.create(**content)
        return JsonResponse(
            newtech,
            encoder=TechnicianEncoder,
            safe=False,
        )
