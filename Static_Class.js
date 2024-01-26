// Class with static properties and methods

// Creating the class
class Car {
    static numberOfTyres = 2

    static changeTyres() {
        console.log(Car.numberOfTyres)
    }
}

// Access/update static property
Car.numberOfTyres = 4

// Access static method
Car.changeTyres()