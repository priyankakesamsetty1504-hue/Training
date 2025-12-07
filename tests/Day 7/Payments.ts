
    // 
    
type paymentMode = "creditcard" | "debitcard" | "netbanking" | "upi";

function processPayment(mode: paymentMode) {
    if (mode === "creditcard") {
        console.log("Payment done using Credit Card");
    } else if (mode === "upi") {
        console.log("Payment done using UPI");
    } else if (mode === "debitcard") {
        console.log("Payment done using Debit Card");
    } else if (mode === "netbanking") {
        console.log("Payment done using Net Banking");
    }
}

processPayment("creditcard");
processPayment("upi");