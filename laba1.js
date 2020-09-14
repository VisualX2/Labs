massive(5);



function massive(num){
	let mas = [0];
	for(let i = 1; i < num; i++){
		mas.push(i);
	}
	console.log(mas);
}

let arr_ex = [15, 3, 5];
let cd = check_divide(arr_ex);
console.log(cd);

function check_divide(arr){
    if(arr[0]%arr[1] != 0){
        return false;
    }
    if(arr[0]%arr[2] != 0){
        return false;
    }
    return true;

}

let cap_ex = "work";
console.log(capitalize(cap_ex));

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}