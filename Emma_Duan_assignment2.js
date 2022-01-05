const itemsObject = [
    {quantity: 1, price: 200},
    {quantity: 3, price: 350},
    {quantity: 5, price: 400}
];

function MyDouble(array){
    for(let i=0; i<array.length; i++) {
        array[i].quantity = array[i].quantity * 2;
        array[i].price = array[i].price * 2; 
    }
    return array
}

function MyFilter(array){
    NewArray=[];
    for(let i=0; i<array.length; i++) {
        if (array[i].quantity > 2 && array[i].price > 300) {
            NewArray.push(array[i])
        } 
    }
    return NewArray;
}

// console.log(MyFilter(itemsObject)[1])

function MyValue(array){
    value = 0;
    for(let i=0; i<array.length; i++) {
        value = value + array[i].quantity * array[i].price;
        }
    return value;
}

console.log(MyValue(itemsObject));

const string =
' Perhaps       The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array  ';

function NormalString(s){
    let l = s.length;
    for(let i = 0; i < l; i++){
        if (s[i] != ' '){
            s = s.substring(i,l);
            break;
        }
    }

    l = s.length;
    for(let i = l-1; i >= 0; i--){
        if (s[i] != ' '){
            s = s.substring(0,i);
            break;
        }
    }

    l = s.length;
    for(let i = l-1; i >= 0; i--){
        if (s[i] == ' ' && s[i-1] == ' '){
            s = s.replace(s[i],'');
            }
    }

    s = s.replace(/[^a-zA-Z]/g, ' ');

    s = s.toLowerCase();

 return s   
}

console.log(NormalString(string));
