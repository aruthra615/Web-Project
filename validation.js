function validatePassword(password) {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  return password.length >= minLength && hasUppercase && hasLowercase && hasNumber && hasSpecial;
}

function validateAndCheckUsername(formData, callback) {
  const username = formData.get('username');

  firebase.database().ref('registrations').once('value', (snapshot) => {
    let exists = false;
    snapshot.forEach((child) => {
      const val = child.val();
      if (val.username === username) {
        exists = true;
      }
    });
    callback(exists);
  });
}

function handleValidatedRegistration(e) {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const password = formData.get("password");

  if (!validatePassword(password)) {
    alert("Password must be at least 8 characters long, and include uppercase, lowercase, number, and special character.");
    return;
  }

  validateAndCheckUsername(formData, function(usernameExists) {
    if (usernameExists) {
      alert("Username already exists. Please choose another.");
      return;
    }

    const data = {};
    for (let [key, value] of formData.entries()) {
      if (key.includes("[]")) {
        key = key.replace("[]", "");
        if (!data[key]) data[key] = [];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    }

    firebase.database().ref("registrations").push(data).then(() => {
      alert("Registration successful!");
      window.location.href = 'login.html';
    });
  });
}
