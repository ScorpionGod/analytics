jQuery(function( $ ){
$("[href*='tel:']").click(function(e) {

  e.preventDefault();

// Comment this if it's not analytics.js
window.ga('send', {
  hitType: 'event',
  eventCategory: 'Phone Call Tracking',
  eventAction: 'Click',
  eventLabel: '917204502312'
});
	console.log("Phone Sent");

setTimeout(function() {
	window.location = href;
}, 500);

});
});
