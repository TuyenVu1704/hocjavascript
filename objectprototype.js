// Object Prototype: Là tạo ra thêm một thuộc tính mà các user đều sẽ có:
//  Ví dụ: Các user học chung một lớp tên là F8, Ta sã tạo ra một Object Prototype tên là className = F8
function User(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
// ten phuong thuc
User.prototype.className = 'F8';
User.prototype.getClassName = function(){
    return this.className;
}

var author = new User('Tuyen', 'Vu', '1');

var user = new User('Tuyen', 'Vu', '2');

console.log(user.className);//Ca hai se co chung la F8
console.log(author.className)

