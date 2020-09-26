/*Javascript-Skript für den Hamburger-Button*/


    function dropDownHamburger(){
        var dropdownbtn = document.getElementById("hamburgerButton");
        // Toggle class "is-active"
       dropdownbtn.classList.toggle("is-active");

        /* When the user clicks on the button, toggle between hiding and showing the dropdown content */
        document.getElementById("myDropdown").classList.toggle("show");
    }

    function dropDownUser(){
      document.getElementById("userMenuDropDown").cclassList.toggle("show");
    }
