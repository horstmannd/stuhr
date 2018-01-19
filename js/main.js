$(document).ready(function(){

	// // Init ScrollMagic
	// var controller = new ScrollMagic.Controller();

	// // pin the intro
	// var pinIntroScene = new ScrollMagic.Scene({
	// 	triggerElement: '.navbar',
	// 	triggerHook: 0
	// })
	// .setPin('.navbar')
  // .addTo(controller);

  // Back., Elastic., Bounce., SlowMo.
  
  TweenMax.from('.home-hero', 1, {opacity:0});
  TweenMax.from('.navbar-brand', .5, {top: -50, opacity: 0, ease:Power0.easeOut}); 
});


















