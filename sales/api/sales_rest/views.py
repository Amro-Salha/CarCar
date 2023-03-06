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
        "id"
    ]

class SalespeopleListEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "employee_number",
        "id"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number",
        "id"
    ]

class SaleEncoder(ModelEncoder):
    model = SaleRecord
    properties = [
        "id"
    ]
    def get_extra_data(self, o):
        return { 'automobile' : o.automobile.vin, 'sales_person' : o.sales_person.name, 'customer' : o.customer.name }


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
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )

require_http_methods(['GET', 'POST'])
def api_list_sales(request):
    if request.method == 'GET':
        sales = SaleRecord.objects.all()
        return JsonResponse({'sales':sales}, encoder=SaleEncoder)
    else:
        content = json.loads(request.body)
        try:
            id = content["automobile"]
            automobile = AutomobileVO.objects.get(id=id)
            content['automobile'] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse({'message': 'Invalid Automobile ID'}, status=400)

        try:
            id = content["sales_person"]
            sales_person = SalesPerson.objects.get(id=id)
            content['sales_person'] = sales_person
        except SalesPerson.DoesNotExist:
            return JsonResponse({'message': 'Invalid Sales Person ID'}, status=400)

        try:
            id = content["customer"]
            customer = Customer.objects.get(id=id)
            content['customer'] = customer
        except Customer.DoesNotExist:
            return JsonResponse({'message': 'Invalid Customer ID'}, status=400)

        sale = SaleRecord.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False
        )
