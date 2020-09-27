/*Javascript-Skript für den Hamburger-Button*/


    function dropDownHamburger(){
        var dropdownbtn = document.getElementById("hamburgerButton");
        // Toggle class "is-active"
       dropdownbtn.classList.toggle("is-active");

        /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function dropDownUser(){
      document.getElementById("userMenuDropDown").classList.toggle("show");
    }

    function dropdownFilters(){

      document.getElementById("filterDropdown").classList.toggle("show");
    }
    var transformDist = 0;
    // credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
    function swipedetect(el, callback){
        var swipeSpan = document.getElementById("swipeSpan")
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 150, //required min distance traveled to be considered swipe
        restraint = 100, // maximum distance allowed at the same time in perpendicular direction
        allowedTime = 1000, // maximum time allowed to travel that distance
        elapsedTime,
        startTime,

        handleswipe = callback || function(swipedir){}
        var transformDist = 0;
        touchsurface.addEventListener('touchstart', function(e){
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            transformDist = 0;
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime() // record time when finger first makes contact with surface
            e.preventDefault()
        }, false)

        touchsurface.addEventListener('touchmove', function(e){
            transformDist = 0;
            var touchobj = e.changedTouches[0];
            transformDist =  touchobj.pageX - startX;
            console.log(transformDist);
            if(transformDist < 135){
              swipeSpan.style.transform = "translateX(+" + Math.round(transformDist) + "px)";
            }
            else{
              window.location.href = "http://tippingpoint.infinityfreeapp.com/mobilemenu/confirmation.html";
            }

        }, false)

        touchsurface.addEventListener('touchend', function(e){
            transformDist = 0;
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
            distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
            elapsedTime = new Date().getTime() - startTime // get time elapsed
          //  var SwipedSeconds = window.setInterval(moveSpan,5)


            // if (elapsedTime <= allowedTime){ // first condition for awipe met
            //     if(Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
            //       swipedir = (distX > 0)? 'completed' : 'incomplete' //if dist traveled is positive it marks the action as completed
            //       window.location.href = "http://www.w3schools.com";
            //     }
            // }
            handleswipe(swipedir)
            e.preventDefault()
        }, false)
    }

    function moveSpan(e) {
      var touchobj = e.changedTouches[0]

      if(transformDist < 110){

        console.log(transformDist);
        document.getElementById("swipeSpan").style.transform = "translateX(+" + transformDist + ")";
      }
      else{
        window.setTimeout(function(){transformDist = 0;}, 5000);
      }



    }

    //USAGE:

    var el = document.getElementById('swipezone');
    swipedetect(el, function(swipedir){
        // swipedir contains either "none", "left", "right", "top", or "down"
        // el.innerHTML = 'Swiped <span style="color:yellow;margin: 0 5px;">' + swipedir +'</span>';

    });
