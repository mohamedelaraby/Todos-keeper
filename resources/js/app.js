 // Person constructor
 function Person(name,dateOfBirth){
    this.name = name;
    this.birthay = new Date(dateOfBirth);
    
    // calculate age
    this.calculateAge = function(){
       const diff = Date.now() - this.birthay.getTime();
       const ageDate = new Date(diff);
       return Math.abs(ageDate.getUTCFullYear() - 1970) ;
    }

   }

 // this outside the function it refers to the window object


 // Output
 const output = document.querySelector('.card-text');

 const name = new Person('ali','9-10-1980');
 output.innerHTML = name.birthay;
 output.innerHTML = name.calculateAge();