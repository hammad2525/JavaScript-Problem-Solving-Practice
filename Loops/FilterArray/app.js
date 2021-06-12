let ages = [40, 56, 80, 90, 100, 101, 102, 23, 22];

let b = ages.filter(check);
document.write(b);

function check(age) {

    return age >= 40;
    
}