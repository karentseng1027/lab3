'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function projectClick(e) {
	e.preventDefault();
	$(this).css("background-color", "#7fff00");


	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	var image = $(containingProject).find(".img");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
	//    description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
		description.fadeToggle();
		image.fadeToggle();
    }
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		console.log("hey");
		$('.jumbotron h1').text("Javascript is connected");
		$(this).text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("#myElement").click(changeText);

	$("a.thumbnail").click(projectClick);
}


function changeText(event){
	$(this).text("Changed text");
}