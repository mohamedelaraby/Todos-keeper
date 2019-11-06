 // Output
 const output = document.querySelector('.card-text');


// [ Prototype ]
// Object.prototype
// Person.prototype

// Person constructor
 function Person (firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

   // Calculate age
   Person.prototype.calculateAge =  function(){
      const diff =  Date.now() - this.birthDay.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
   }

   // Get full name
   Person.prototype.getFullName = function(){
      return `${this.firstName} ${this.lastName}`;
   };

   // Greeting
   Person.prototype.greeting = function (){
      return `Hello there ${this.firstName} ${this.lastName}`;
   };

   // Person object
   const martin =  new Person('martin', 'Dain');

   // Customer constructor
   function Customer(firstName, lastName,phone, membership){
      // Inherite from Person constructor
      Person.call(this, firstName, lastName);

      // customer own properties
      this.phone = phone;
      this.membership = membership;
   }

   // Create a Customer
   const customer1 = new Customer('Tom','Smith', 
                     '555-555-555','standerd');
   
   // Inherit the person prototype methods
   Customer.prototype = Object.create(Person.prototype);

   // Make customer.prototype return Customer()
   Customer.prototype.constructor = Person;

    // Create Customer own greeting method
    Customer.prototype.sayHi = function(){
      return `Hello there ${this.firstName} ${this.lastName}`;
    };
   
   console.log(customer1.sayHi());