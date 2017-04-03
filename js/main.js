// pagepiling init
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#AED6F1', '#AED6F1', '#AED6F1', '#AED6F1'],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: true,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'left',
            'tooltips': ['首页', '教育', 'section3', 'section4']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});

//down circle
$('#down').click(function (event) {
  event.preventDefault();
  $.fn.pagepiling.moveSectionDown();
});
$('#down').mouseenter(function () {
  $('#down').attr("src", "./images/ghost.gif");
});

$('#down').mouseleave(function () {
  $('#down').attr("src", "./images/down.png");
});
