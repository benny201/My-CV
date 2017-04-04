// pagepiling init
$(document).ready(function() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#E5E7E9', '#E5E7E9', '#E5E7E9', '#E5E7E9', '#E5E7E9'],
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
            'tooltips': ['首页', '项目', '技术', '教育', 'more']
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
  $('.down').css("left", "43%");
	$('.down').css("bottom", "-20px");
});

$('#down').mouseleave(function () {
  $('#down').attr("src", "./images/down.png");
  $('.down').css("left", "49%");
	$('.down').css("bottom", "1rem");
});
