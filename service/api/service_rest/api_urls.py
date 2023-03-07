from django.urls import path

from .api_views import api_list_service_appointments, api_list_technician, api_delete_appointment


urlpatterns = [
    path("services/", api_list_service_appointments, name="api_list_service_appointments"),
    path("services/<int:id>/", api_delete_appointment, name="api_delete_appointment"),
    path("services/tech/", api_list_technician, name="api_list_technician"),
]
