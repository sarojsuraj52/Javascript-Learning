let count = 0;
class User {

    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password
        count++;
    }
    registeredUsers() {
        console.log('username is: ' + this.userName);
        console.log('user eamil is: ' + this.email);
        console.log('user password is: ' + this.password)
    }
    count() {
        console.log(count + ' user(s) registered till now')
    }
}


class member extends User {
    constructor(userName, email, password, memberPackage) {
        super(userName, email, password);
        this.memberPackage = memberPackage;
        let todaysDate = new Date();
        const membershipactivetillYear = todaysDate.getFullYear();
        const membershipactivetillMonth = todaysDate.getMonth();
        const membershipactivetillDay = todaysDate.getDay();
        this.membershipactivetilldate = new Date(
            membershipactivetillYear,
            membershipactivetillMonth,
            membershipactivetillDay
        );
    }
   
    renewMembership() {
        const membershipactivetillYear = this.membershipactivetilldate.getFullYear();
        const membershipactivetillMonth = this.membershipactivetilldate.getMonth();
        const membershipactivetillDay = this.membershipactivetilldate.getDay();

        this.membershipactivetilldate = new Date(
            membershipactivetillYear,
            membershipactivetillMonth + 1, //just increase the month by 1
            membershipactivetillDay
        );
    }
    subsccriptionActiveTill() {
        console.log(this.userName + " is subscribed to " + this.memberPackage + ' package till ' + this.membershipactivetilldate);
    }
    getPackage() {
        console.log(this.userName + " is subscribed to " + this.memberPackage + ' package');
    }
}

let suraj = new member('suraj', 'sarojsuraj52@gmail.com', '12345', 'standard');

// suraj.registeredUsers();
// suraj.count()
suraj.getPackage();
suraj.renewMembership()
suraj.subsccriptionActiveTill()





