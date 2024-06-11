function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
};
    window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.close-1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
    }