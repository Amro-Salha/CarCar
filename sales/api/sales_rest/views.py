from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, SalesPerson, Customer, SaleRecord

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "year",
        "color",
        "model",
    ]

class SalespeopleListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
    ]

class SaleEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "automobile",
        "sales_person",
        "customer"
    ]
    encoders = {
        "automobile" : AutomobileVOEncoder,
        "sales_person" : SalespeopleListEncoder,
        "customer" : CustomerEncoder
    }


require_http_methods(['GET', 'POST'])
def api_list_salespeople(request):
    if request.method == 'GET':
        sales_people = SalesPerson.objects.all()
        return JsonResponse({'sales_people' : sales_people}, encoder=SalespeopleListEncoder)
    else:
        content = json.loads(request.body)
        sales_person = SalesPerson.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=SalespeopleListEncoder,
            safe=False,
        )

require_http_methods(['GET', 'POST'])
def api_list_customers(request):
    if request.method == 'GET':
        customers = Customer.objects.all()
        return JsonResponse({'customers' : customers}, encoder=CustomerEncoder)
    else:
        content = json.loads(request.body)
        sales_person = Customer.objects.create(**content)
        return JsonResponse(
            sales_person,
            encoder=CustomerEncoder,
            safe=False,
        )

require_http_methods(['GET', 'POST'])
def api_list_sales(request):
    pass
