// price table
const checkBill = document.querySelector('input[type="checkbox"]');
const monthly = document.getElementById("basic");
const yearly = document.getElementById("premium");
const perDuration = document.querySelectorAll("#per");

checkBill.addEventListener("change", () => {
  if (checkBill.checked) {
    monthly.innerText = "1999";
    yearly.innerText = "23988";
    perDuration.forEach(function (per) {
      per.innerText = "Billed Annually";
    });
    document.getElementById("yearly").style.color = "#2196f3";
    document.getElementById("monthly").style.color = "#ccc";
  } else {
    monthly.innerText = "299";
    yearly.innerText = "3588";
    perDuration.forEach(function (per) {
      per.innerText = "Per Month";
    });
    document.getElementById("monthly").style.color = "#2196f3";
    document.getElementById("yearly").style.color = "#ccc";
  }
});

//transaction page
// let toggle = false; // We set up the toggle flag
// const $this = $(this);

// Code to enable auto-tabbing functionality 
// after the user inputs 4 digits on cc number fields
//  $(".cc-number").keyup(function () {
//        const maxLength = 4;
//         if (this.value.length == maxLength) {
//           $(this).next('.cc-number').focus();
//         }
//   });  
const ccNumberInputs = document.querySelectorAll('.cc-number');
  ccNumberInputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
      const inputLength = event.target.value.length;
      const maxLength = parseInt(event.target.getAttribute('maxlength'));

      if (inputLength === maxLength && index < ccNumberInputs.length - 1) {
        ccNumberInputs[index + 1].focus();
      }
    });
  });

// CC image cards toggle funcionality

// $('img').click( function () {
//   if ( toggle === true ) {
//     $( this ).removeClass('toggled');
//     toggle = false;
//   } else if ( toggle === false ) {
//     $( this ).addClass('toggled').siblings().removeClass("toggled");
//     ('img').not('$this').removeClass('toggled');
//     toggle = true;
//   }
// });
function toggleCards(cardId) {
    const cardElements = document.querySelectorAll('.image-block img');

    cardElements.forEach((card) => {
      if (card.id === cardId) {
        card.classList.toggle('toggled', true);
      } else {
        card.classList.toggle('toggled', false);
      }
    });
  }

  // Add event listeners to each card to handle toggling
  document.getElementById('visa-card').addEventListener('click', () => {
    toggleCards('visa-card');
  });
  document.getElementById('diners-club-card').addEventListener('click', () => {
    toggleCards('diners-club-card');
  });
  document.getElementById('amex-card').addEventListener('click', () => {
    toggleCards('amex-card');
  });
  document.getElementById('mastercard-card').addEventListener('click', () => {
    toggleCards('mastercard-card');
  });

  function showContainer2() {
      document.getElementById("pricingTable").style.display = "none";
      document.getElementById("container2").style.display = "flex";
    }
    
    function showPaymentSuccessful() {
        const paymentSuccessful = document.getElementById("paymentsuccessful");
        document.getElementById("container2").style.display = "none";
        const loadingCard = document.getElementById('loadingCard');
        const successCard = document.getElementById('successCard');
        
        // Show the payment successful message for 7 seconds
        paymentSuccessful.style.display = "flex";
        setTimeout(() => {
            paymentSuccessful.style.display = "none";
            // document.getElementById("paymentsuccessful").style.display = "none";
            document.getElementById("secondSection").style.display = "flex";
    }, 7000);

    // Show the loading cardbox with the confirming text for 5 seconds
    loadingCard.style.display = "block";
    successCard.style.display = 'none';
    setTimeout(() => {
        loadingCard.style.display = 'none';
    }, 5000);

    // After 5 seconds, hide the loading cardbox and show the success cardbox for 2 seconds
    setTimeout(() => {
        successCard.style.display = 'block';
        setTimeout(() => {
            successCard.style.display = 'none';
        }, 2000);
    }, 5000);
}



// Get all diet plan links
const dietPlanLinks = document.querySelectorAll('.diet-plan-link');
const cancelbutton1 = document.querySelectorAll('.cancel-button-1')
    // Add click event listener to each diet plan link
dietPlanLinks.forEach((dietPlanLink) => {
    dietPlanLink.addEventListener('click', (e) => {
        e.preventDefault();
        const dietPlanItem = dietPlanLink.parentNode;
        const dietPlanCardbox = dietPlanItem.querySelector('.diet-plan-cardbox');

        // Hide all other diet plan cardboxes
        const allDietPlanCardboxes = document.querySelectorAll('.diet-plan-cardbox');
        allDietPlanCardboxes.forEach((cardbox) => {
            if (cardbox !== dietPlanCardbox) {
                cardbox.style.display = 'none';
            }
        });

        // Toggle the display of the clicked diet plan cardbox
        dietPlanCardbox.style.display = (dietPlanCardbox.style.display === 'block') ? 'none' : 'block';
        console.log(cancelbutton1);
    });
});
// Add click event listener to each cancel button
cancelbutton1.forEach((cancelButton) => {
    cancelButton.addEventListener('click', (e) => {
        e.preventDefault();
        const dietPlanCardbox = cancelButton.closest('.diet-plan-cardbox');
        dietPlanCardbox.style.display = 'none';
    });
});
// Get all meal links
const mealLinks = document.querySelectorAll('.meal-link');
const mealDetailsList = document.querySelectorAll('.meal-details');
// const cancelButton = document.querySelector('.cancel-button');


// Add click event listener to each meal link
mealLinks.forEach((mealLink, index) => {
    mealLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Remove active class from all meal links and meal details
        mealLinks.forEach((link) => {
            link.classList.remove('active');
        });
        mealDetailsList.forEach((mealDetails) => {
            mealDetails.classList.remove('active');
        });

        // Add active class to the clicked meal link and corresponding meal details
        mealLink.classList.add('active');
        mealDetailsList[index].classList.add('active');
        // const clickedMealDetails = document.querySelector(`.meal-details[data-meal="${mealLink.dataset.meal}"]`);

        // //  Check if meal details are active
        // if (clickedMealDetails.classList.contains('active')) {
        //     cancelButton.style.display = 'block';
        // } else {
        //     cancelButton.style.display = 'none';
        // }

    });
});



// Add click event listener to cancel button
// cancelButton.addEventListener('click', () => {
//     // Remove active class from all meal details
//     mealDetailsList.forEach((mealDetails) => {
//         mealDetails.classList.remove('active');
//     });
//     // Hide the cancel button
//     cancelButton.style.display = 'none';
// });

// sign outbutton
const signOutIcon = document.getElementById("signOutIcon");

signOutIcon.addEventListener("click", () => {
  const shouldSignOut = window.confirm("Do you want to sign out?");
  if (shouldSignOut) {
    // Navigate to the index page (change "index.html" to your desired URL)
    window.location.href = "index.html";
  } else {
    // Remove the prompt if the user chooses not to sign out
    window.alert("Sign-out canceled.");
  }
});
