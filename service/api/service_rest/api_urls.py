from django.urls import path

from .api_views import api_list_service_appointments, api_list_technician


urlpatterns = [
    path("services/", api_list_service_appointments, name="api_list_service_appointments"),
    path("services/tech/", api_list_technician, name="api_list_technician"),
]
