let items = ["Pen", "Pencil", "Mouse", "Keyboard", "Eraser", "Diary"];

const products= [
    {
        name : "Laptop", 
        price : 50000,
        count : 25
    },
    {
        name : "Desktop", 
        price : 45000,
        count : 10
    },
    {
        name : "Phone", 
        price : 80000,
        count : 15
    }
];

arrMapReduce(); 

function arrMapReduce(){
    products.sort((a,b) => a.price - b.price);
    console.log(products);
    //MAP
    const prodWorth = products.map(item => item.price * item.count);
    console.log("Total worth of each product: "+ prodWorth);    

    //REDUCE

    const storeWorth = prodWorth.reduce(((i,val)=> i+val),0);
    console.log("Total worth of store: "+ storeWorth); 
}

function arrayOp(){
       
    // console.log("Original List: " + items);
    // items.pop() ; //Remove the last item
    // items.shift(); //Remove the first item
    // items.push("Mobile", "Charger");
    // console.log(items);
    // items.unshift("Laptop"); //Appends the first item
    // console.log(items);

    // if (! items.includes('Backpack'))
    //     console.log("Backpack not present");
    
    arrSort();
}

function arrSort(){
    console.log(items.sort());

    let numbers = [79, 80, 34, 9, 90];
    console.log(numbers);
    console.log("Sorting on numbers: " + numbers.sort()); 
    console.log("Sorting on numbers: " + numbers.sort((a,b)=>b-a));

    //MAP
    const num = [4,9,16,25,36];
    const sqrtArr = num.map(Math.sqrt);

    console.log(sqrtArr); //debugging
    str=''
    for(let i=0; i<sqrtArr.length; i++){
        str += sqrtArr[i] + '|' ;        
    }

    console.log(str);
    //arrConCat();
}

function arrConCat(){
    const a = [2,4,6];
    const b = [1,3,5];
    const c = [16, 25, 36];

    const res = a.concat(b,c);
    console.log(res);

    arrFill();
}


function arrFill(){
    const numbers = [1,2,3,4,5,6,7,8,9];
    numbers.fill(100);
    console.log("Array after filling: " + numbers);

    numbers.fill(200, 4,8);
    console.log("Array after positional filling: " + numbers);
}










