console.log( document.title);


const text1 = document.querySelector("#nama");
const text2 = document.querySelector("#name");
const text3 = document.querySelector("#login");


const getDataAsync = async () => {
    let response = await fetch("https://api.github.com/users/nadhifahyk17");
    let result = await response.json();

    const name = document.getElementById("name");
    const login = document.getElementById("login");
    const bio = document.getElementById("bio");

    console.log(result);
    name.innerHTML = result.name;
    login.innerHTML = result.login;
    bio.innerHTML = result.bio;

    document.getElementById("myBtn").addEventListener("click", function() {
        alert("thank you for your attention!^^");
      });

    document.body.style.backgroundColor = "#CEE5D05";
    document.getElementById("nama").style.color = "#dda0dd";
    document.getElementById("nama").style.fontFamily = "sans.serif";
    document.getElementById("login").style.color = "#b0e0e6";
    document.getElementById("bio").style.color = "#b0e0e6";
    document.getElementById("name").style.color = "#b0e0e6";
    document.getElementById("name").style.fontFamily = "sans.serif";
    document.getElementById("bio").style.fontFamily = "sans.serif";
    document.getElementById("login").style.fontFamily = "sans.serif";

    var myName = "di atas ada data GitHub Nadhifah";
    console.log(myName);

};
getDataAsync();