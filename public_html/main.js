/* 
    Author: Mohamed
    Project: Mouse Tracker Project
    
    Purpose:
    Here are codes that will be used in the HTML code section.
 */

// Creating varaibles for connection between javascript code and the HTML code:
var win = document.getElementById("main");
var mse_track = document.getElementById("tracker");

// Creating event listener for the mouse cursor and circle object:
win.addEventListener("mousemove", importcood);
//mse_track.addEventListener("mouseenter", mousetracker);
mse_track.addEventListener("mousemove", mousetracker);


//// Functions:
// Obtaining the coordinates of the mouse cursor:
function importcood(evnt)
{
    var mouse_Posx = evnt.clientX;
    var mouse_Posy = evnt.clientY;
    
//    var output_x = document.getElementById("loc_X");
//    var output_y = document.getElementById("loc_Y");

    var output_x = document.getElementById("loc_X");
    var output_y = document.getElementById("loc_Y");
    
    output_x.innerHTML = mouse_Posx.toFixed(3);
    output_y.innerHTML = mouse_Posy.toFixed(3);
}

// Dragging the circle shape under the mouse cursor:
function mousetracker(evt)
{
    var cle_track = document.getElementById("tracker");
    var mouse_Posx = evt.clientX;
    var mouse_Posy = evt.clientY;
//    var mouse_Posx = evt.pageX;
//    var mouse_Posy = evt.pageY;
//    var mouse_Posx = evt.movementX;
//    var mouse_Posy = evt.movementY;
    
    cle_track.style.left = mouse_Posx  + 'px';
    cle_track.style.top = mouse_Posy  + 'px';
    cle_track.style.visibility = 'visible';
    cle_track.style.position = 'absolute';
}