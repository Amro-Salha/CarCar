import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

def get_automobiles():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            import_href=auto["href"],
            vin = auto["vin"],
            year = auto["year"],
            color = auto["color"],
            model = auto["model"]["name"],
        )

def poll():
    while True:
        print('Auto poller polling for data')
        try:
            get_automobiles()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(5)


if __name__ == "__main__":
    poll()
