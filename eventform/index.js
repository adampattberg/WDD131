
const form = document.querySelector("#eventForm");
const person = document.querySelector("#person");
const numberContainer = document.querySelector("#numberContainer");
const codeContainer = document.querySelector("#codeContainer");
const output = document.querySelector("#output");
const number = document.querySelector("#number");
const code = document.querySelector("#code");

function updateNumberField() {

    const value = person.value;

    if (value === "student") {

        numberContainer.style.display = "flex";
        codeContainer.style.display = "none";

    }

    else if (value === "guest") {

        numberContainer.style.display = "none";
        codeContainer.style.display = "flex";

    }

    else {

        numberContainer.style.display = "none";
        codeContainer.style.display = "none";

    }

}

person.addEventListener(
    "change",
    updateNumberField
);
updateNumberField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.person.value;
  const eventDate = form.eventDate.value;

  if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

    if(type === "student"){

    if(!/^\d{9}$/.test(number.value.trim())){

        output.textContent =
        "Student I# must be exactly 9 digits.";

        return;
    }

    }

    if(type === "guest"){

    if(code.value.trim() !== "EVENT131"){

        output.textContent =
        "Access code must be EVENT131.";

        return;
    }

    }


  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${eventDate}</p>
  `;

  form.reset();
  updateNumberField();
});
          