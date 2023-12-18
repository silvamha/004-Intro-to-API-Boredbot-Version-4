/**!SECTION
 * JS logic and code to manipulate Bulma elements
 */
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
console.log(navbarMenu);
console.log(burgerIcon);

// Toggle menu items on and off as the button is clicked
burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  console.log("The click works!");
});
