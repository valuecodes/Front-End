'use strict'

class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        
    }
    static countUsers(){
        console.log('There are '+this.count+' users');
    };

    register(){
        console.log(this.username+' is now registered');
    }
}

// calling individual user
let bob=new User('bob','bob@email.com','12345');
bob.register();

// calling static
User.countUsers();

// Extending User class
class Member extends User{
    constructor(username,email,password,memberPackage){
        // Super is shortcut for adding 
        super(username,email,password);
        this.package=memberPackage;
    }

    getPackage(){
        console.log(this.username+' is subscribed to the '+this.package+' package');
    }
}
let mike=new Member('mike','mike@email.com','123','Standard');

mike.getPackage();
mike.register();

// Adding package for bob
bob.package='Premium';
console.log(bob.package);
console.log(bob.password);
