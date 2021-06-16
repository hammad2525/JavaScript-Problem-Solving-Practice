let agesArray = [12, 45, 56, 4];
agesArray = agesArray.map(newAge => {
    return newAge * 10;
})

console.log(agesArray);


let usersData = [

    {
        name: 'Saeed',

        lastName: 'Ahmad',

        school: 'UoT',

        profession: 'engineer',

    },

    {

        name: 'Ali',

        lastName: 'Khan',

        school: 'TUM',

        profession: 'researcher',

    }

];

let b = usersData.map(test);
console.log(b);

function test(x) {
    return x.name + " " + x.lastName + " " + x.school + " " + x.profession;

}