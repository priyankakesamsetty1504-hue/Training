function checkTicketAvailability(phoneNocall) {
    console.log("Checking ticket availability...");
    setTimeout(() => {
        console.log("Tickets are available!");
        phoneNocall();
        }, 2000); // Simulating async operation with 2 seconds delay
function youGetCall() {
    console.log("You got the call for the ticket booking.");
}
    
checkTicketAvailability(youGetCall);
}
