import './styles/main.scss';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
import 'bootstrap';
// import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
// import 'animation.gsap';
// import 'debug.addIndicators';

// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: ".dynamicContent #loader", triggerHook: "onEnter"})
                .addTo(controller)
                .on("enter", function (e) {
                    if (!$("#loader").hasClass("active")) {
                        $("#loader").addClass("active");
                        if (console){
                            console.log("loading new items");
                        }
                        // simulate ajax call to add content using the function below
                        setTimeout(addBoxes, 1000, 6);
                    }
                });

// pseudo function to add new content. In real life it would be done through an ajax request.
function addBoxes (amount) {
    for (var i=1; i<=amount; i++) {
        $("<div></div>")
            .addClass("box1")
            .appendTo("#content");
    }
    // "loading" done -> revert to normal state
    scene.update(); // make sure the scene gets the new start position
    $("#loader").removeClass("active");
}

// add some boxes to start with.
addBoxes(30);

// console.log(ScrollMagic)