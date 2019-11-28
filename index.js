function getFirstName() {
  console.log(document.getElementById("name-id").value);
  document
    .getElementById("button")
    .addEventListener("click", event => greeting(event));
}

getFirstName();

function greeting(event) {
  event.preventDefault();
  let firstName = document.getElementById("name-id").value.split(" ")[0];
  document.getElementsByClassName("results")[0].textContent = firstName;
  console.log(`It's so nice to meet you ${firstName}`);
}
