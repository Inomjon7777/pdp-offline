const calc = (a: number, b: number): number => {
  return a + b;
};

const loggerCalc = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// void and never type
// void
const Logger = (msg: string): void => {
  console.log(msg);
};

// never
const sayErr = (msg: string): void => {
  if (!msg) {
    throw new Error(msg);
  }
};

// Object
const car = {
  name: "BMW",
  isAirBag: true,
};

const loggerCar = ({
  name,
  isAirBag,
}: {
  name: string;
  isAirBag: boolean;
}): void => {
  console.log(`My car ${name}, has airbag ${isAirBag}`);
};
loggerCar(car);

const merc = {
  color: "black",
  isAirBag: true,
  locations: {
    country: "German",
    city: "bayern",
  },
  setColor(color: string): void {
    this.color = color;
  },
};

const { color }: { color: string } = merc;
const {
  locations: { country, city },
}: { locations: { country: string; city: string } } = merc;