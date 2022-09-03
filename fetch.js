function fetchdata() {
  url = "https://random-data-api.com/api/v2/users ";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.getElementById("name").innerText =
        data.first_name + " " + data.last_name;
      document.getElementById("dob").innerText = data.date_of_birth;
      document.getElementById("id").innerText = data.id;
      document.getElementById("phone").innerText = data.phone_number;
      document.getElementById("email").innerText = data.email;
      document.getElementById(
        "image"
      ).innerHTML = `<img src="${data.avatar}"> `;
    });
}
fetchdata();
