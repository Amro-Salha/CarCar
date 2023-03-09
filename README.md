# CarCar

Team:

* Person 1 - Amro doing sales
* Person 2 - Aaron doing service

## Design



## Service microservice

The service microservice contains three models, Technician, ServiceAppointment, and AutomobileVO.  The technician model stores the information for each technician given a name and an employee number.  ServiceAppointments holds the customer name, time/date, reason and vin.  Two foreign keys ties the ServiceAppointments to the other two models (Technician and AutomobileVO). The poller will pull data from the inventory api and create instances of it within the VO, this is used to have a direct link to the same information while preventing interference with other apps that utilize the same data.

## Sales microservice

When checking for automobiles that are currently in inventory, the poller will poll the port that the automobile service is running on for new automobileVO's. These automobileVO's will then be used as a means of getting information on the inventory without a direct connection between the 2 microservices and also without allowing changes to be made to the inventory from the sales microservice.
