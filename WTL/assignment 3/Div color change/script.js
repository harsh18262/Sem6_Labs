function change_color() {
    let user_color = prompt("Enter Color", "White");
    var div = document.getElementById("form_div");
    div.style.backgroundColor = user_color;

}