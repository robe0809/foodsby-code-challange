const myApp = angular.module('myApp', ['ngMaterial']);

myApp.controller("DeliveryController", ['$http', function ($http) {
    console.log('controller loaded');

    let self = this;

    self.allDeliveries;
    self.deliveriesPerDay;

    // getting current day in order to enter page and display the current days orders. 
    self.date = new Date();
    
    self.weekday = new Array(7);
    self.weekday[0] = "Sunday";
    self.weekday[1] = "Monday";
    self.weekday[2] = "Tuesday";
    self.weekday[3] = "Wednesday";
    self.weekday[4] = "Thursday";
    self.weekday[5] = "Friday";
    self.weekday[6] = "Saturday";

    self.currentDay = self.weekday[self.date.getDay()];

    // gets delivery info from Server. 
    self.getDeliveries = function () {
        $http.get('/delivery')
            .then((response) => {
                console.log('get response', response.data);
                self.allDeliveries = response.data;
                self.getCurrentDay(self.currentDay, self.allDeliveries);  
            })
            .catch((error) => {
                console.log('error on get', error);
            })
    }

    self.getDeliveries();

    // loops through the Response from the JSON file which gives us access to days and delivery details. 
    self.deliverySchedule = function (day, allDeliveries) {  
        for (let i = 0; i < allDeliveries.length; i++) {
            if (day === allDeliveries[i].day) {
                self.deliveriesPerDay = allDeliveries[i].deliveries;
                console.log('per day', self.deliveriesPerDay);
            }
        }
    }

    self.getCurrentDay = function (day, allDeliveries) {
        for (let i = 0; i < allDeliveries.length; i++) {
            if (day === allDeliveries[i].day) {
                self.deliveriesPerDay = allDeliveries[i].deliveries;
            }
        }
    }
}]);