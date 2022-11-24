
function change (event , cityName ){

// Declare all variables
var i, links, contents;
links=document.getElementsByClassName("assignement");
contents=document.getElementsByClassName("content");

// Get all elements with class="content" and hide them
for (i = 0; i < contents.length; i++) {
contents[i].style.display = "none";
}

// Get all elements with class="assignment" and remove the class "active"
for (i = 0; i < links.length; i++) {
    links[i].className = links[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the link that opened the tab
document.getElementById(cityName).style.display = "block";
event.currentTarget.className += " active";

}

