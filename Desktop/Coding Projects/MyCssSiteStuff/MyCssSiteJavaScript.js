const dropDownMenu = () => {
    let x = document.getElementById("dropDownClick");
    if (x.className === "topNav") {
        x.className += " responsive"; /* Here, I just changed 'topNav' to topNavResponsive.*/
    } else {
        x.className = "topNav";
    }
};

