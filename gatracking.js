jQuery(function( $ ){
$("[href*='tel:']").click(function(e) {

  e.preventDefault();
  var href = $(this).attr('href');

  // tel:
  if (href.toLowerCase().indexOf("tel:") >= 0) {
    eventCategory = 'Phone Call Tracking';
    eventLabel = href.replace('tel:', '');

  }   

// Comment this if it's not analytics.js
window.ga('send', {
  hitType: 'event',
  eventCategory: eventCategory,
  eventAction: 'Click',
  eventLabel: eventLabel
});

setTimeout(function() {
	window.location = href;
}, 500);

});
});
