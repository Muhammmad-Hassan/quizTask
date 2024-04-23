document.getElementById("studentForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = ["rollNo", "name", "batch", "section"];
  var valid = formData.every(function (field) {
    var value = document.getElementById(field).value;
    if (!value) {
      alert("Please fill all the fields.");
      return false;
    }
    sessionStorage.setItem(field, value);
    return true;
  });
  if (valid) {
    window.location.href = "/quiz-app-main/quiz.html";
  }
});
