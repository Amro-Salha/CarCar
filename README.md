# CarCar

Team:

* Person 1 - Amro doing sales
* Person 2 - Aaron doing service

## Design



## Service microservice

    The service microservice contains three models, Technician, ServiceAppointment, and AutomobileVO.  The technician model stores the information for each technician given a name and an employee number.  ServiceAppointments holds the customer name, time/date, reason and vin.  Two foreign keys ties the ServiceAppointments to the other two models (Technician and AutomobileVO). The poller will pull data from the inventory api and create instances of it within the VO, this is used to have a direct link to the same information while preventing interference with other apps that utilize the same data.

## Sales microservice

<<<<<<< HEAD
When checking for automobiles that are currently in inventory, the poller will poll the port that the automobile service is running on for new automobileVO's. These automobileVO's will then be used as a means of getting information on the inventory without a direct connection between the 2 microservices and also without allowing changes to be made to the inventory from the sales microservice.
=======
Explain your models and integration with the inventory
microservice, here.

    When checking for automobiles that are currently in inventory, the poller will poll the port that the automobile service is running on for new automobileVO's. These automobileVO's will then be used as a means of getting information on the inventory without a direct connection between the 2 microservices and also without allowing changes to be made to the inventory from the sales microservice.


Bounded Context Summary:

    CarCar has different bounded contexts that are designed to provide efficient functionality for their specific needs without interfering with the logic of other microservices. These contexts include the service, sales, react user interface, and inventory microservices, each with its own logic applied. When one microservice needs information from another (e.g., automobile information from the inventory microservice), a poller can be set up to retrieve the data whenever the automobile microservice's data is updated. This ensures that the microservices can work independently while still sharing information when necessary.
>>>>>>> bddb43758517a6045bba162dee9cfeb92815767d
