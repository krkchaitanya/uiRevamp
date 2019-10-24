console.log("--dealing with es6 - es7 classes");

// class declarations
// class expressions
// constructor 
// prototypes and static methods
// inheritance
// super()
// get 
// static

class Techinfo {
    constructor(name, version, applicationType){
        this.name=name;
        this.version=version;
        this.applicationType=applicationType;
    }

    get techInformation() {
        return this.getTechinfo();
    }

    getTechinfo() {
        return {
            name: this.name,
            version: this.version,
            applicationType: this.applicationType
        };
    }
}

const techinf1 = new Techinfo("Node JS", "5.64", "serverside");
if(undefined != techinf1) {
    console.log(techinf1.techInformation);
} else {
    console.assert(false, "failure in fetching the tech information");
}



let Rectangle = class {
    constructor(height, width) {
        this.height=height;
        this.width=width;
    }

    get reactangleArea() {
        return this.area(this.height, this.width);
    }

    area(height, width) {
        return height*width;
    }
};

const area = new Rectangle(4,4);
if(undefined != area) { 
    console.log("area: ", area.reactangleArea);
} else {
    console.log(false, "Failure in handling the rectangle dimemsions");
}


class Car {
    constructor(name, model, year) {
        this.name=name;
        this.model=model;
        this.year=year;
    }

    static getCarDetails(name, model, year) {
        return `car details-  name:${name} model: ${model} year:${year}`;
    }
}

class Subaru extends Car {
    constructor(name, model, year, transmission, mileage) {
        super(name,model,year);
        this.transmission=transmission;
        this.mileage=mileage;
    }
}

const carInf = new Car("Honda", "CRV", "2019");
const carInf1 = Car.getCarDetails("Honda", "Accord", "2020");
console.log("carInf: " + carInf);
console.log(carInf1);


const subaruCarInf = new Subaru("Subaru", "Outback", "2019", "Automatic", 25);
console.log(subaruCarInf);