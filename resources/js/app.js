//  // Output
//  const output = document.querySelector('.card-text');


// // [ Prototype ]
// // Object.prototype
// // Person.prototype

// // Using Object.create
//  const personPrototype = {
//     greeting: function(){
//        return ` Hello there ${this.firstName} ${this.lastName}`;
//     },
//      getsMarried: function(newLastName){
//         this.lastName = newLastName;
//      }
//  }

//  const mary =  Object.create(personPrototype);

//  mary.firstName = 'Mary';
//  mary.lastName = 'smith';
//  mary.age = 30;
//  console.log(mary);
//  mary.getsMarried('Thompson');
//  console.log(mary.greeting());


//  // Another way
//  const brad = Object.create(personPrototype, {
//    firstName:{value:'brad'},
//    lastName:{value:'traversy'}
//  });

//  console.log(brad);

//  // Best way
//  const ali = Object.create(personPrototype, {
//    firstName:{value:'Ali'},
//    lastName:{value:'madara'}, 
//    username: {value: 'ali'},
//     email: {value:'ali.yahoo.com'},
//     age:{value:45},
//  });

//  console.log(ali.greeting());

// ES6 Classes
 class Person {
    constructor(firstName, lastName, dob){
       this.firstName = firstName;
       this.lastName = lastName;
       this.birthday = new Date(dob);
    }

    // Greeting
    greeting (){
       return ` Hello there ${this.firstName} ${this.lastName}`;
    }

    // Calculate age
    calculateAge(){
       const diff = Date.now() - this.birthday.getTime();
       const ageDate = new Date(diff);
       return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    // Gets married
    getsMarried(newLastName){
       this.lastName = newLastName;
    }

    static addNumber(x,c){
       return x + c;
    }
 }

 const huda =  new Person('Huda', 'Emad', '11-13-1980');
// console.log(huda);
 console.log(huda.greeting());

 huda.getsMarried('Thosmston');
 console.log(huda.calculateAge());
 console.log(huda.greeting());

 console.log(Person.addNumber(1,3));