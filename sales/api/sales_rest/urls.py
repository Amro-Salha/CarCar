from django.urls import path
from .views import api_list_salespeople, api_list_customers

urlpatterns = [
    path("salespeople/", api_list_salespeople, name="api_list_salespeople"),
    path("customers/", api_list_customers, name="api_list_customers"),
]