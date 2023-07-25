let toggle = false; // We set up the toggle flag
const $this = $(this);

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