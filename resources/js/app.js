 // Output
 const output = document.querySelector('.card-text');


// [ Prototype ]
// Object.prototype
// Person.prototype

// Using Object.create
 const personPrototype = {
    greeting: function(){
       return ` Hello there ${this.firstName} ${this.lastName}`;
    },
     getsMarried: function(newLastName){
        this.lastName = newLastName;
     }
 }

 const mary =  Object.create(personPrototype);

 mary.firstName = 'Mary';
 mary.lastName = 'smith';
 mary.age = 30;
 console.log(mary);
 mary.getsMarried('Thompson');
 console.log(mary.greeting());


 // Another way
 const brad = Object.create(personPrototype, {
   firstName:{value:'brad'},
   lastName:{value:'traversy'}
 });

 console.log(brad);

 // Best way
 const ali = Object.create(personPrototype, {
   firstName:{value:'Ali'},
   lastName:{value:'madara'}, 
   username: {value: 'ali'},
    email: {value:'ali.yahoo.com'},
    age:{value:45},
 });

 console.log(ali.greeting());