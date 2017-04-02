function showPic(whichPic) {
  var showImg = document.getElementById("holder");
  var source;

  // get source
  if (whichPic.getAttribute) {
    source = whichPic.getAttribute("href");
  } else {
    source = whichPic.href;
  }

  //set source
  if (showImg.setAttribute) {
    showImg.setAttribute("src", source);
  } else {
    showImg.src = source;
  }
}


// event handler
var eventHandler = {
  addEventHandler : function (element, type, handler) {
    if (element.addEventListener) {
      element.addEventListener(type, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent("on" + type, handler);
    } else {
      element["on" + type] = handler;
    }
  },
  getEvent : function(event) {
    return event ? event : window.event;
  },
  getTarget : function (event) {
    return event.target || event.srcElement;
  },
  preventDefault: function (event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  }
};


// init
(function init() {
  var list = document.getElementById("imageList");
  //imageList事件委托
  eventHandler.addEventHandler(list, "click", function (event) {
    event = eventHandler.getEvent(event);
    var target = eventHandler.getTarget(event);
    switch (target.id) {
      case "image1":
        eventHandler.preventDefault(event);
        showPic(document.getElementById("image1"));
        break;
      case "image2":
        eventHandler.preventDefault(event);
        showPic(document.getElementById("image2"));
        break;
      case "image3":
        eventHandler.preventDefault(event);
        showPic(document.getElementById("image3"));
        break;
      case "image4":
        eventHandler.preventDefault(event);
        showPic(document.getElementById("image4"));
        break;
      default:
        break;
    }
  })
})();
