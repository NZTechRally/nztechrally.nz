/*!
 * Extract from Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */

// Look for .hamburger
const hamburger = document.getElementById("globalNavigationButton");
// On click
hamburger.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true" || false;
  this.setAttribute("aria-expanded", !expanded);
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  const menu = this.nextElementSibling;
  menu.hidden = !menu.hidden;
});
