function opentab(evt, nameTab) {
  // Declare all variables
  var i, tabBody, tablinks;

  // Get all elements with class="tabBody" and hide them
  tabBody = document.getElementsByClassName("tabBody");
  for (i = 0; i < tabBody.length; i++) {
    tabBody[i].style.display = "none";
 }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(nameTab).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function() {
$('div.tablinks').click(function() { 
    var id = $(this).attr('id').substring(3);
	var tab = "tab";
	//alert(tab+id);
	opentab(event, tab+id);
	}); 
});