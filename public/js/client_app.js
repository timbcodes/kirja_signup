// Select our DOM elements
const submitBtn = document.getElementById("submit_btn");
const emailInput = document.getElementById("email_input");

// Add an event listener
submitBtn.addEventListener("click", () => {
    const emailAddy = emailInput.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)) {
        fetch(`/email_add/?email=${emailAddy}`);
        window.location.href = "/success";
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
});

emailInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        const emailAddy = emailInput.value;
        if (
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput.value)
        ) {
            fetch(`/email_add/?email=${emailAddy}`);
            window.location.href = "/success";
        } else {
            alert("You have entered an invalid email address!");
            return false;
        }
    }
});