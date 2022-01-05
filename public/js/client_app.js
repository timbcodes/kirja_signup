// Select our DOM elements
const submitBtn = document.getElementById("submit_btn");
const emailInput = document.getElementById("email_input");

// Add an event listener
submitBtn.addEventListener("click", () => {
    const emailAddy = emailInput.value;
    fetch(`/email_add/?email=${emailAddy}`);
    console.log(emailAddy);
});