 // Output
 const output = document.querySelector('.card-text');


// [ Prototype ]
// Object.prototype
// Person.prototype

// Person constructor
 function Person (firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDay =  new Date(dob);
 
   //  // Calculate age
   //  this.calculateAge = function(){
   //     const diff =  Date.now() - this.birthDay.getTime();
   //     const ageDate = new Date(diff);
   //     return Math.abs(ageDate.getUTCFullYear() - 1970);
   //  }
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
   }

   //  Get Married
    Person.prototype.getMarried = function( newLastName){
       this.lastName = newLastName;
    }

   const john =  new Person('john', 'doe','8-12-90');
   console.log(john.calculateAge());
   
   const mary = new Person(' Mary', 'jonshon','8-12-1980');
   console.log(mary);
   mary.getMarried('well smith');
   console.log(mary.getFullName());

   console.log(mary.hasOwnProperty('lastName'));