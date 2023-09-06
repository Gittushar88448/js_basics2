let student = {
    name: "Tushar",
    year_of_graduation: 3,
    section: 'c',
    work: function(){
        let day = 'sunday';
       let status = (day!=='sunday')?  'work': 'no work';
    }
}

console.log(student);

// Dot Notation only allows static keys while Bracket Notation accepts dynamic keys

for(let key in student){
    console.log(key ,":" , student[key]);
}