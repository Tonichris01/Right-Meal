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