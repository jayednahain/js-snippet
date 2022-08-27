

let number = []
let float_number = []
let string_val=[]
let bool_value = []


var data = [1,2,3,4,5,6,7,8,"nahian",true,4.4]

data.find(function(current_val) {
    console.log(current_val);

    if (typeof current_val=='number'){
        number.push(current_val)
    }
    else if( typeof current_val == 'string'){
        string_val.push(current_val)
    }
    else if( typeof current_val == 'boolean')
    {
        bool_value.push(current_val)
    }
})

console.log(number);
console.log(string_val);
console.log(bool_value);