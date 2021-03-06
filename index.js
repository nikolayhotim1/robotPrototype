'use strict';
class Robot {
    constructor(name, year, owner) {
        this.name = name;
        this.year = year;
        this.owner = owner;
    }

    speak() {
        console.log('Hello, I\'m a robot. My name\'s ' + this.name + '.');
    }

    makeCoffee() {
        console.log('It\'s 4 coffee for you!');
    }

    blinkLights() {
        console.log('See, I lighting 4 times!');
    }
}

class SpaceRobot extends Robot {
    constructor(name, year, owner, homePlanet) {
        super(name, year, owner);
        this.homePlanet = homePlanet;
    }

    speak() {
        alert(this.name + ' says Sir, If I may venture an opinion...');
    }

    pilot() {
        alert(this.name + ' says Thrusters? Are they important?');
    }
}

Robot.prototype.maker = 'ObjectsRUs';

let robby = new Robot('Robby', 1956, 'Dr. Morbius');

robby.onOffSwitch = true;

robby.makeCoffee = function () {
    console.log('It\'s 4 coffee from "Starbucks" for you!');
}

let rosie = new Robot('Rosie', 1962, 'George Jetson');

rosie.cleanHouse = function () {
    console.log('I cleaned your house 4 times!');
}

let c3po = new SpaceRobot('C3PO', 1977, 'Luke Skywalker', 'Tatooine');
let simon = new SpaceRobot('Simon', 2009, 'Carla Diana', 'Earth');

console.log(robby.name + ' was made by ' + robby.maker +
    ' in ' + robby.year + ' and is owned by ' + robby.owner);

robby.makeCoffee();
robby.blinkLights();

console.log(rosie.name + ' was made by ' + rosie.maker +
    ' in ' + rosie.year + ' and is owned by ' + rosie.owner);

rosie.cleanHouse();

c3po.speak();
c3po.pilot();
console.log(c3po.name + ' was made by ' + c3po.maker);

simon.makeCoffee();
simon.blinkLights();
simon.speak();
