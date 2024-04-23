function User(username, email, password) {
    this.username = username;
    this._email = email; // Using _email to avoid calling setter recursively
    this._password = password; // Using _password to avoid calling setter recursively
    
    // Define password property with getter and setter
    Object.defineProperty(this, "password", {
        get: function() {
            return this._password.toUpperCase(); // Getter returning password in uppercase
        },
        set: function(value) { // Setter to update the _password
            this._password = value; 
        }
    });

    // Define email property with getter and setter
    Object.defineProperty(this, "email", {
        get: function() {
            return`jiug${ this._email}sx.com` ; // Getter returning email in uppercase
        },
        set: function(value) { // Setter to update the _email
            this._email = value; 
        }
    });
}

const alam = new User("Aftab Alam", "Alam@gmail.com", "asgreg");
console.log(alam.password); // Output: ASGREG
console.log(alam.username); // Output: Aftab Alam
console.log(alam.email); // Output: ALAM@GMAIL.COM
