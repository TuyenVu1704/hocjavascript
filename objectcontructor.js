function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Tuyen', 'Vu', 'Avatar');
var user = new User('Xi', 'Vu', 'Avatar');

console.log(author.getName());