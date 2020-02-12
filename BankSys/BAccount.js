class Account { 

    constructor() { 
        if (this.constructor == Account) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }
};

class veju extends Account{ 

    constructor() { }

}
