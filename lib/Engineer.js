const require = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, gHub){
        super(name, id, email);
        this.gHub = gHub;
    }
    getRole(){
        return "Engineer";
    }
    getGitHub(){
        return this.gHub;
    }
}
module.exports = Engineer;