from common.json import ModelEncoder

from .models import AutomobileVO, SalesPerson, Customer, SaleRecord


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
        "id",
        "sale_price"
    ]
    def get_extra_data(self, o):
        return { 'automobile' : o.automobile.vin, 'sales_person' : o.sales_person.name, 'customer' : o.customer.name }
