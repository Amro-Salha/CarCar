# CarCar

Team:

* Person 1 - Amro doing sales
* Person 2 - Aaron doing service

## Design

## Service microservice

The service microservice contains three models, Technician, ServiceAppointment, and AutomobileVO.  The technician model stores the information for each technician given a name and an employee number.  ServiceAppointments holds the customer name, time/date, reason and vin.  Two foreign keys ties the ServiceAppointments to the other two models (Technician and AutomobileVO). The poller will pull data from the inventory api and create instances of it within the VO, this is used to have a direct link to the same information while preventing interference with other apps that utilize the same data.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
