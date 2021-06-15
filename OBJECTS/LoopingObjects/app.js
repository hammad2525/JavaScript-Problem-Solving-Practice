let cities = {
    first: 'karachi',
    second: 'lahore',
    third: 'islamabad',
    fourth: 'quetta'
};

for (let val in cities) {
    if (Object.hasOwnProperty.call(cities, val)) {
        let myvalue = [cities, val];
        console.log(cities[val]);
        
    }
}
    
    
