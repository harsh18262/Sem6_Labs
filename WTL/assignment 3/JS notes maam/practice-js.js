function changeDisp(){
    alert("Displaying date and time");
    document.getElementById('demo').innerHTML=Date();
    document.getElementById('demo1').style.fontSize="30px";
    console.log("Font size changed!!");
}

function hideButton(){
    document.getElementById("btnHide").style.display="none";
    console.log("Hide the button");
    test();
}

function test(){
    let name = "Amit";     
    money = 2000.50; 
    var money; 
    console.log("Name: " + name + "\nMoney: " + money); 
}

function calcSum(){
    value1 = parseInt(document.mainForm.textBox1.value);
    value2 = parseInt(document.mainForm.textBox2.value);
    sum = value1 + value2;
    document.mainForm.textBoxSum.value = sum;
}


function displayName(){
    let name = prompt("Enter your name", "example-Jyoti Malhotra");    
    text = " Hello, " + name + "!! Welcome to World of Javascript \n Welcome to MIT ADT University, Pune";
    console.log(text);
    document.getElementById("displayText").innerHTML= text;
}   

function changeColor(obj){
    document.getElementById("test").style.backgroundColor=obj.value;
        console.log("TEST");
}