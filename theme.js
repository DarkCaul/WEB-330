/*

    Title: WEB 330 – Enterprise JavaScript II
    Author: Richard Krasso
    Date: 03/15/2023
    Modified By: Tiffany Baker
    Description: JavaScript page for web 330 class.

*/

/*
  Sets the default theme to light if one is not chosen.
 */

function setDefaultTheme()

{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}


/*
 Set the HTML body to the user's selected theme. 
 */

function setSelectedTheme()

{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}
