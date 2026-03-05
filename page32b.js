import { checkBalance,withdraw,deposit,showTransactions } from "./Bank.js";

deposit(1, 1500);
checkBalance(1)
deposit(1, 1000);
checkBalance(1)
withdraw(2, 2000);
checkBalance(2)
withdraw(2, 4000);
checkBalance(2)
showTransactions(2)