/**!SECTION
 * JS logic and code to manipulate Bulma elements
 */
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

// Toggle menu items on and off as the button is clicked
burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  console.log("The click works!");
});

/**!SECTION - DOM Manipulation - tabs and divs
 * The goal is to toggle the tabs to display content when active.
 * When Product Details is active, then Delivery Information must be hidden and vice versa
 * Comment each line of code for instructional purposes and future reference
 */

// Get all the tabs
const tabs = document.querySelectorAll(".tabs li");

// Get all the tab content
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

// Loop through each tab and add an event listener to each
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove the is-active class from all tabs
    tabs.forEach((item) => item.classList.remove("is-active"));
    // Add the is-active class to the clicked tab
    tab.classList.add("is-active");

    // Get the tab that was clicked
    const target = tab.dataset.target;
    // Remove the is-active class from all tab content
    tabContentBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});

/**Button
 * Grab button and open modal
 * Modal must have
 * Qty of itmes to purchase
 * Name
 * Delivery Address
 * Submit button
 * Close modal button
 */


const joinBtn = document.querySelector('#join-btn')
const exitBtn = document.querySelector('#exit-btn')


// Function to activate modal
const activateModal = ()=>{
  document.querySelector('.modal').classList.add('is-active')
  console.log('The Buttton Works!')
}
joinBtn.addEventListener('click',activateModal)

const exitModal = () =>{
  document.querySelector('.modal').classList.remove('is-active')
}

exitBtn.addEventListener('click', exitModal)

