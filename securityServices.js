
class securityServices {

    static totalsecurityServices = 0;
     

constructor (name, rate, availableSecurityGuards) {
this.name = name;
this.rate = rate;
this.availableSecurityGuards = availableSecurityGuards; 

securityServices.totalsecurityServices++; 
}

securityCounter() {
    if (this.availableSecurityGuards > 0) {
        this.availableSecurityGuards--;
        console.log(`Customer hired ${this.name}`)
    } else {
        console.log(`No available security guards for ${this.name}.`)
    }
}

getSecurityServiceInfo() {
    console.log(`Security Service: ${this.name}, Rate: $${this.rate}, Available Guards: ${this.availableSecurityGuards}`);
}

static getTotalSecurityServices() {
    return securityServices.totalsecurityServices; 
}

} 


class Client {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    displayInfo() {
        console.log(`Client: ${this.name}, Email: ${this.email}`);
    }

    hiredSecurityService(securityService) {
        if (securityService.availableSecurityGuards > 0) {
            securityService.availableSecurityGuards--;
            console.log(`${this.name} hired ${securityService.name}`);
        } else {
            console.log(`Sorry, no available security guards for ${securityService.name}.`);
        }
    }

    listHiredSecurityServices(securityService) {
        console.log(`${this.name} hired ${securityService.name}`);
    }
}


const client1 = new Client('Horinzontal City', 'horizontal.city@example.com');
const client2 = new Client('Ballroom in Cynosure', 'ballroom.cynosure@example.com');
const client3 = new Client('Heart Hotel', 'heart.hotel@example.com');
const client4 = new Client('Dr. Ajah ', 'dr.ajah@example.com');


client1.displayInfo();
client2.displayInfo();
client3.displayInfo();
client4.displayInfo();

console.log("..............................")
console.log("..............................")
console.log("..............................")

const securityService1 = new securityServices('Excort Guards', 110, 50); 
const securityService2 = new securityServices("Bouncers", 100, 30);
const securityService3 = new securityServices("SpyGuards", 150, 40);
const securityService4 = new securityServices("InfantryGuards", 60, 10);
const securityService5 = new securityServices("Corporate Security", 50, 0);


securityService1.getSecurityServiceInfo(); 
securityService2.getSecurityServiceInfo();
securityService3.getSecurityServiceInfo();
securityService4.getSecurityServiceInfo();
securityService5.getSecurityServiceInfo();
console.log("totalSecurityServices:", securityServices.getTotalSecurityServices());




console.log("..............................")
console.log("..............................")
console.log("..............................")



client1.hiredSecurityService(securityService1);
client2.hiredSecurityService(securityService5);
client3.hiredSecurityService(securityService1);
client4.hiredSecurityService(securityService5);


securityService1.securityCounter();
securityService5.securityCounter(); 