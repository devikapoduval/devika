var firebaseConfig = {
    apiKey: "AIzaSyCNhFIou22nX3_OKrWof_a5bU77q529JM4",
    authDomain: "kwitter-f2ef0.firebaseapp.com",
    databaseURL: "https://kwitter-f2ef0-default-rtdb.firebaseio.com",
    projectId: "kwitter-f2ef0",
    storageBucket: "kwitter-f2ef0.appspot.com",
    messagingSenderId: "434874067162",
    appId: "1:434874067162:web:93f850126724df9f845de3",
    measurementId: "G-ESSRT6YTD9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    }