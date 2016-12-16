$(document).ready(function() {
    $(".menuTopContainer").hide();
    $(".drop").hide();
    $(".dragMe").draggable({
        containment: ".container",
        scroll: false,
        cursorAt: {
            top: 30,
            left: 325
        }
    });
    var vertical = false;

    $(".dragMe").draggable({
        drag: function(event, ui) {
            $(".drop").show();
        },
        stop: function(event, ui) {
            $(".drop").hide();
        }
    });

    $("#rotate").click(function() {
        if (vertical === true) {
            $(".dragMe").css("width", "350px");
            $(".dragMe").css("height", "50px");
            $(".menu").css("flex-direction", "");
            $(".menu").css("width", "80%");
            $(".menu").css("height", "100%");
            $(".dragMe").removeClass("dragVertical");
            $(".dragMe").addClass("dragHorizontal");
            $("#rotate").removeClass("fa-undo").addClass("fa-repeat");
            $(".dragMe").draggable({
                containment: ".container",
                scroll: false,
                cursorAt: {
                    top: 30,
                    left: 325
                }
            });
            vertical = false;
        } else {
            $(".dragMe").css("width", "50px");
            $(".dragMe").css("height", "350px");
            $(".menu").css("flex-direction", "column");
            $(".menu").css("width", "100%");
            $(".menu").css("height", "80%");
            $(".dragMe").removeClass("dragHorizontal");
            $(".dragMe").addClass("dragVertical");
            $("#rotate").removeClass("fa-repeat").addClass("fa-undo");
            $(".dragMe").draggable({
                containment: ".container",
                scroll: false,
                cursorAt: {
                    top: 325,
                    left: 30
                }
            });
            vertical = true;
        }
    });

    $(".trashDrop").droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
            $(".trash").css("transform", "scale(1)");
            $(".menuTopContainer").slideDown();
        },
        over: function(event, ui) {
            $(".trash").css("transform", "scale(1.5)");
        },
        out: function(event, ui) {
            $(".trash").css("transform", "scale(1)");
        }
    });

    $(".trashDrop2").droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
            $(".trash").css("transform", "scale(1)");
            $(".menuTopContainer").slideDown();
        },
        over: function(event, ui) {
            $(".trash").css("transform", "scale(1.5)");
        },
        out: function(event, ui) {
            $(".trash").css("transform", "scale(1)");
        }
    });

});
