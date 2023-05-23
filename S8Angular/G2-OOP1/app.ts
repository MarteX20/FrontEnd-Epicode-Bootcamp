class Account {
    balance: number = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Saldo insufficiente.");
        }
    }
}

class SonAccount extends Account {
}

class MotherAccount extends Account {
    addInterest() {
        const interest = this.balance * 0.1;
        this.balance -= interest;
    }
}

// Utilizzo delle classi
const sonAccount = new SonAccount();
const motherAccount = new MotherAccount();

sonAccount.deposit(1000);
sonAccount.withdraw(150);

motherAccount.deposit(500);
motherAccount.withdraw(50);
motherAccount.addInterest();

console.log("Saldo conto del figlio: ", sonAccount.balance);
console.log("Saldo conto della madre: ", motherAccount.balance);