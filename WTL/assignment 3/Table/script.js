function table() {
    let user_input = document.getElementById("user_number");
    let user_number = user_input.value;
    for (let i = 1; i <= 10; i++) {
        console.log(user_number * i);
    }
}