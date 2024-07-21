
class Fullname{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    displayfullname(){
        console.log(`Name: ${this.firstName} ${this.lastName}`)
    }
}

class NumberOfYears{
    constructor(years){
        this.years = years;
    }
    displayYears(){
        console.log(`Been with us for: ${this.years} years`);
    }
}

const newfullname = new Fullname("Jeff", "Richards");
// newfullname.displayfullname();
const newfullname2 = new Fullname("Alice", "Potter");

const jeff = new NumberOfYears(20);
const alice = new NumberOfYears(2);

let displayAll = (newfullname.displayfullname() + jeff.displayYears(), "<br>") + (newfullname2.displayfullname() + alice.displayYears());

//uses a prompt
// let username = new Fullname(prompt("Enter your first name"), prompt("Enter your last name"));
// username.displayfullname();

