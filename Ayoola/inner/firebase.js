// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVTheN4w8M0blhuMY07AfDOri8Sb3-hzI",
  authDomain: "exeatregister.firebaseapp.com",
  databaseURL: "https://exeatregister-default-rtdb.firebaseio.com",
  projectId: "exeatregister",
  storageBucket: "exeatregister.firebasestorage.app",
  messagingSenderId: "572897522310",
  appId: "1:572897522310:web:8c588bb399825e360ad707",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference for database
var contactFormDB = firebase.database().ref("contactForm");

// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  // Get values
  var matricNumber = getElementVal("matricNo");
  var studentMail = getElementVal("emailID");
  var message = getElementVal("message");

  // Save message to Firebase
  saveMessages(matricNumber, studentMail, message);

  // Show alert
  alert("Exeat submitted successfully");

  // Clear form
  document.getElementById("contactForm").reset();

  // Navigate to the progress page
  window.location.href = "progress.html";
}

const saveMessages = (matricNumber, studentMail, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: matricNumber,
    email: studentMail,
    message: message,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};