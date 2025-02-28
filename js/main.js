let menu = document.querySelector(".menu-icon");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("open-menu");
  menu.classList.toggle("move");
};

window.onscroll = () => {
  navbar.classList.remove("open-menu");
  menu.classList.remove("move");
};

// header background change on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("header-active", window.scrollY > 0);
});

// Email JS

function validate() {
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let msg = document.querySelector(".message");
  let sendBtn = document.querySelector(".send-btn");

  sendBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (name.value == "" || email.value == "" || msg.value == "") {
      emptyerror();
    } else {
      sendmail(name.value, email.value, msg.value);
      success();
    }
  });
}

validate();

function sendmail(name, email, msg) {
  // Replace with your actual EmailJS service ID and template ID
  //   var serviceID = "service_n09h5lk";
  //   var templateID = "template_j7zzdio";

  //   var params = {
  //     sendername: name,
  //     senderemail: email,
  //     message: message,
  //   };

  //   emailjs
  //     .send(serviceID, templateID, params)
  //     .then(function (response) {
  //       success(name);
  //     })
  //     .catch(function (error) {
  //       showError();
  //     });

  var servicekey = config.SERVICE_KEY;
  var templatekey = config.TEMPLATE_KEY;

  emailjs.send("service_sidkxzp", "template_mcxeppq", {
    to_name: email,
    from_name: name,
    message: msg,
  });
}

function emptyerror() {
  swal({
    title: "Oh no....!",
    text: "Fields Cannot be empty!",
    icon: "error",
    // button: "Aww yiss!",
  });
}

function success() {
  swal({
    title: "Email sent successfully",
    text: "We try to reply in 24 hours",
    icon: "success",
    // button: "Aww yiss!",
  });

  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";
  document.querySelector(".message").value = "";
}

// function validate() {
//   let name = document.querySelector(".name");
//   let email = document.querySelector(".email");
//   let msg = document.querySelector(".message");
//   let sendBtn = document.querySelector(".send-btn");

//   sendBtn.addEventListener("click", (e) => {
//     e.preventDefault();

//     // Trim whitespace from input values
//     const trimmedName = name.value.trim();
//     const trimmedEmail = email.value.trim();
//     const trimmedMsg = msg.value.trim();

//     if (trimmedName === "" || trimmedEmail === "" || trimmedMsg === "") {
//       emptyError();
//     } else {
//       sendMail(trimmedName, trimmedEmail, trimmedMsg);
//     }
//   });
// }

// function success(senderName) {
//   swal({
//     title: "Success!",
//     text: "Thank you, " + senderName + "! Your message has been sent.",
//     icon: "success",
//     button: "Great!",
//   });
// }

// function showError() {
//   swal({
//     title: "Oops... Something went wrong!",
//     text: "Please try again later.",
//     icon: "error",
//     button: "Okay",
//   });
// }

// function emptyError() {
//   swal({
//     title: "Oh no...!",
//     text: "Fields cannot be empty!",
//     icon: "error",
//     button: "Got it!",
//   });
// }

// validate();

// Scroll Top
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});