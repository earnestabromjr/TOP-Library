function getBrand(prefix) {
  console.log(prefix + this.brand)
}

let honda = {
  brand: 'Honda',
};

let audi = {
  brand: 'Audi',
};

getBrand.call(honda, 'Its a "');
getBrand.call(audi, 'Its a "');

getBrand.apply(honda, ['Its a "']);
getBrand.apply(audi, ['Its a "']);

let getThis = () => this;
console.log(getThis() === window);
