# CarCar

Team:

* Person 1 - Amro doing sales
* Person 2 - Aaron doing service

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

When checking for automobiles that are currently in inventory, the poller will poll the port that the automobile service is running on for new automobileVO's. These automobileVO's will then be used as a means of getting information on the inventory without a direct connection between the 2 microservices and also without allowing changes to be made to the inventory from the sales microservice. 
