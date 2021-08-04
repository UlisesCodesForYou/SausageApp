let toggleDropdown = () => {
    let navbarToggle = document.getElementById("navbarToggle")
    
    if(navbarToggle.className === 'topNav') {
        navbarToggle.className += ' responsive';
    } else {
        navbarToggle.classList = 'topNav';
    }
};

