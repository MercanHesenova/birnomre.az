// PROGRESS BAR
function updateProgress(currentStep) {
	$('section div').removeClass('current');
	$('.step#' + currentStep).toggleClass('current');
	$('.step#' + currentStep).prevAll('div').toggleClass('current');
}

var steps = $('.step').length; 
var currentStep = 0;
$('.step#' + currentStep).toggleClass('current');


$('#stepper').on('click', function() {
    $('.step').removeClass('current')
	for(let i = 1; i <= 3; i++){
        $('.step#' + i).toggleClass('current')
    }
});
$('#stepper1').on('click', function() {
    $('.step').removeClass('current')
	for(let i = 3; i < 6; i++){
        $('.step#' + i).toggleClass('current')
    }
});

$('#stepper2').on('click', function() {
    $('.step').removeClass('current')
	for(let i = 5; i < 9; i++){
        $('.step#' + i).toggleClass('current')
    }
});
$('#stepper3').on('click', function() {
    $('.step').removeClass('current')
	for(let i = 8; i <= 10; i++){
        $('.step#' + i).toggleClass('current')
    }
});
// PROGRESS BAR END


// PRELOADER
var load = document.getElementById("loading");
var load = document.getElementById("preloader-bg");

setTimeout(function loadfun()
{
    load.style.display = 'none';
}
, 500);
// PRELOADER-END


// INPUT-MASK
$("input").bind("input", function() {
    var $this = $(this);
    setTimeout(function() {
        if ( $this.val().length >= parseInt($this.attr("maxlength"),10) )
            $this.next("input").focus();
    },0);
});
// INPUT-MASK-END


// ONLY-NUMBER
$(document).ready(function () {    
    
    $('.numberonly').keypress(function (e) {    

        var charCode = (e.which) ? e.which : event.keyCode    

        if (String.fromCharCode(charCode).match(/[^0-9]/g))    

            return false;                        

    });    

});   
// ONLY-NUMBER-END

