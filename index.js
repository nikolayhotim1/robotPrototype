'use strict';
function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

function SpaceRobot(name, year, owner, homePlanet) {
    this.name = name;
    this.year = year;
    this.owner = owner;
    this.homePlanet = homePlanet;
}

Robot.prototype.maker = 'ObjectsRUs';

Robot.prototype.speak = function () {
    console.log('Hello, I\'m a robot. My name\'s ' + this.name + '.');
}

Robot.prototype.makeCoffee = function () {
    console.log('It\'s 4 coffee for you!');
}

Robot.prototype.blinkLights = function () {
    console.log('See, I lighting 4 times!');
}

SpaceRobot.prototype = new Robot();

SpaceRobot.prototype.speak = function () {
    alert(this.name + ' says Sir, If I may venture an opinion...');
};

SpaceRobot.prototype.pilot = function () {
    alert(this.name + ' says Thrusters? Are they important?');
};


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
