 // Sub classes

 class Person{
    constructor(firstName, lastName){
       this.firstName = firstName;
       this.lastName = lastName;
    }

    // Greeting
    greeting(){
       return `Hello there ${this.firstName} ${this.lastName}`;
    }
 }


 // Customer class
 class Customer extends Person{
    constructor(firstName, lastName, phone, membership){
       super(firstName,lastName);

       this.phone = phone; 
       this.membership = membership;
    }

    // Get membership
    static membershipCost(){
       return  500;
    }
 }

 // new customer
 const john = new Customer('john', 'Doe', '555-555-5555','Standard');
 console.log(john);
 console.log(john.greeting());
 console.log(Customer.membershipCost());