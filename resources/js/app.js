

/*
    [  author ] ;- Muhammed alaraby
    [  Date   ] ;- 19/10/19
    [  Info   ] ;- Home page Script
*/

// Define the UI
 const loanForm      = document.querySelector('#loan-form'),
       amountInput   = document.querySelector('#amount'),
       interestInput = document.querySelector('#interest'),
       yearsInput    = document.querySelector('#years');

// Results UI
const monthlyPayment = document.querySelector('#monthly-payment'),
      totalPayment   = document.querySelector('#total-payment'),
      totalInterest  = document.querySelector('#total-interest');   
         

// Load all Event listeners
loadEventsListener();

function loadEventsListener(){

   //Listen for submit 
   loanForm.addEventListener('submit', function(e){
      // Hide results
      document.getElementById('results').style.display = 'none';
      
      // Show loader
      document.getElementById('loading').style.display = 'block';
 
      setTimeout(calculateResults, 2000);


   // Prevent the default behavior
   e.preventDefault();
   });
}

///////// [ Events Listeners functions ] ///////////////////////////////////

// calculate the results
function calculateResults(){

   // Calculations details
   const principal = parseFloat(amount.value),
         finalInterest = parseFloat(interestInput.value) / 100 / 12,
         finalPayment = parseFloat(yearsInput.value) * 12;
 
   // Compute monthly payment
    const x = Math.pow( 1 + finalInterest, finalPayment);
          monthly = (principal * x * finalInterest) / ( x - 1);      
 
   
   // Check if monthly is a finite number
   if(isFinite(monthly)){
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * finalPayment).toFixed(2);
      totalInterest.value = ((monthly * finalPayment) - principal).toFixed(2);
      
      // Show results ui
      document.getElementById('results').style.display = 'block';
      document.querySelector('#loading').style.display = 'none';

   } else {
      showError(' Please check your numbers');
   }
   
   

}


// Display errors
function showError(error){

   // Hide results and loader
   document.getElementById('results').style.display = 'none';
   document.getElementById('loading').style.display = 'none';


    // Get error position element
 const card = document.querySelector('.card'),
          heading = document.querySelector('.heading');


 // Create a div
 const errorDiv = document.createElement('div');

 // Add a class
 errorDiv.className = ' alert alert-danger';

 // create  text node and append to div
 errorDiv.appendChild(document.createTextNode(error));

 // Insert error above heading
 card.insertBefore(errorDiv, heading);

 // Clear error after 3 seconds
 setTimeout(clearError, 3000);

  
}

// clear Error
function clearError(){
   document.querySelector('.alert').remove();
}