
function validateName() {
    var nameInput = document.getElementById('name');
    var nameError = document.getElementById('nameError');
    var nameValue = nameInput.value.trim();
   
    var lettersOnly = /^[A-Za-z ]+$/;
  
    if (nameValue === '') {
      nameError.textContent = 'Name cannot be empty';
    } else if (!nameValue.match(lettersOnly)) {
      nameError.textContent = 'Name should contain only letters';
    } else {
      nameError.textContent = '';
     
    }
    updateInputBorder()
  }
  
function validateMail() {
    var emailInput = document.getElementById('email');
    var emailError = document.getElementById('emailError');
    var email = emailInput.value;

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email === '') {
      emailError.textContent = 'Email is required';
      return false;
    } else if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      return false;
    } else {
      
      emailError.textContent = '';
     }
     updateInputBorder()
  }
  
function validatePhone() {
    var phone_no = document.getElementById('phone').value;
    var numberError = document.getElementById('noError');
    var phonePattern = /^[6-9]\d{9}$/;
    if (phone_no === '') {
        numberError.textContent = 'IT cannot be empty';
    }
    else if (!phonePattern.test(phone_no)) {
      numberError.textContent = 'Phone number is invalid';
    } else {
      numberError.textContent = ''; 
    }
    updateInputBorder()
  }
function validateDate() {
    var inputDate = new Date(document.getElementById('dob').value);
    var dateError=document.getElementById('dateError');
    var minDate = new Date('1950-01-01'); 
    var maxDate = new Date('2010-12-31'); 
    if (inputDate === null) {
        dateError.textContent = 'It cannot be empty';
    }
    else if (inputDate >= minDate && inputDate <= maxDate) {
      dateError.textContent='';
      
    } else {
      dateError.textContent='Date is outside the allowed range.';
     
    }
    updateInputBorder()
  }
  function calculateAge() {
    var dobString = document.getElementById('dob').value;
    var dob = new Date(dobString);
    var today = new Date();
  
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    console.log(age);
    document.getElementById('age').value = age;
  }
 
// function isUserIdUnique(userId) {
//   for (var i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);
//     var formData = JSON.parse(localStorage.getItem(key));

//     if (formData && formData.userId === userId) {
//       return false; 
//     }
//   }
//   return true; 
// }
function validatePassword() {
    var password = document.getElementById('password').value;
    var passwordError = document.getElementById('passwordError');
    var passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
    if (password=== '') {
      passwordError.textContent = 'It cannot be empty';
  }
  
    else if (!passwordPattern.test(password)) {
      passwordError.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
    } else {
      passwordError.textContent = ''; 
    }
    updateInputBorder()
}
function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var icon = document.querySelector('.toggle-password i');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

  function validatePan() {
    var pan_no = document.getElementById('pan').value;
    var panError = document.getElementById('panError');
    var panPattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    if (pan_no === '') {
        nameError.textContent = 'It cannot be empty';
    }
    else if (!panPattern.test(pan_no)) {
      panError.textContent = 'Pan number is invalid';
    } else {
       panError.textContent = ''; 
    }
    updateInputBorder()
  }
  function validateImage() {
    var input = document.getElementById('profilePhoto');
    var result=document.getElementById('fileInfo')
    var file = input.files[0];
  
    if (!file) {
      result.textContent='Please upload a file';
    }
  
    var fileName = file.name;
    var fileSize = file.size;
    var fileType = file.type;
  
    if (!fileType.match('image.*')) {
      result.textContent='The uploaded file is not in the Image Format';
      result.style.color="red";
    }
    else{
     if (fileSize > 2 * 1024 * 1024) { 
      result.textContent='File Size should be Less than  or Equal to 2MB';
    }
    else{
  
      result.textContent='';
   
    }
    updateInputBorder()
  }
  
   
  }
  function validateUserName() {
    var username = document.getElementById('userId').value;
    var usernameError = document.getElementById("usernameError");

    if (username === "") {
        usernameError.textContent = "Username cannot be empty";
    } else {
        var storedFormData;
        try {
            
            var allKeys = Object.keys(localStorage);
            var matchingKey = allKeys.find(key => {
                try {
                    storedFormData = JSON.parse(localStorage.getItem(key));
                    return storedFormData && storedFormData.userId === username;
                } catch (error) {
                    console.error("Error parsing stored data:", error);
                    return false;
                }
            });

            if (matchingKey) {
                usernameError.textContent = 'Username already exists. Please choose a different one.';
            } else {
                usernameError.textContent = '';
                
            }
        } catch (error) {
            console.error("Error retrieving submission key:", error);
        }
    }
    updateInputBorder()
}
function updateInputBorder() {
  const errorSpans = document.querySelectorAll('span[id$="Error"]');
  
  errorSpans.forEach(span => {
    const inputId = span.previousElementSibling.id;
    const inputElement = document.getElementById(inputId);
    
    if (span.textContent.trim() !== '') {
      inputElement.style.borderColor = 'red';
    } else {
      inputElement.style.borderColor = 'green';
    }
  });
}

function checkErrorsBeforeSubmit() {
  var errorSpans = document.querySelectorAll('span[id$="Error"]'); // Select all span tags with IDs ending in "Error"
  console.log(errorSpans);
  for (var i = 0; i < errorSpans.length; i++) {
      if (errorSpans[i].textContent !== '') {
          
          alert('Please fix all errors before submitting.');
          return false; // Prevent form submission if any error message exists
      }
  }

  // If no errors, proceed to store data in local storage
  storeData(); // Call the function to store data

  return true; // Allow form submission
}


  function storeData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var occupation = document.getElementById('occupation').value;
    var education = document.getElementById('education').value;
    var userId = document.getElementById('userId').value;
    var password = document.getElementById('password').value;
    var panNumber = document.getElementById('pan').value;
    var profilePhoto = document.getElementById('profilePhoto');
    var uploadedFile = profilePhoto.files[0];
    var reader = new FileReader();
  
    reader.onload = function(event) {
      
        var imageData = event.target.result;

        var fileSize = uploadedFile ? uploadedFile.size : null;

        var timestamp = new Date().getTime(); 

        var formData = {
            name: name,
            email: email,
            phone: phone,
            dob: dob,
            age: age,
            gender: gender,
            occupation: occupation ? occupation : null,
            education: education,
            userId: userId,
            password: password,
            panNumber: panNumber,
            imageData: imageData,
            fileSize: fileSize
        };

        var jsonData = JSON.stringify(formData);

       
        localStorage.setItem('formData_' + timestamp, jsonData);

        alert('Data stored successfully!');
        window.location.reload();
       
    };

    reader.readAsDataURL(uploadedFile);
}

function searchData() {
  var searchTerm = document.getElementById('search').value;
  var resultDiv = document.getElementById('resultContainer');
  resultDiv.innerHTML = ''; // Clear previous results

  if (/^[a-zA-Z ]+$/.test(searchTerm)) {
    searchTerm = searchTerm.toLowerCase();
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var formData = JSON.parse(localStorage.getItem(key));

      if (formData.name.toLowerCase().includes(searchTerm)) {
        appendDetailsToList(resultDiv, key, formData);
      }
    }
  } else if (/^\d+$/.test(searchTerm)) {
    var numberOfDays = parseInt(searchTerm, 10);
    console.log("Searching by days:", numberOfDays);
    searchLocalStorageByAge(resultDiv, numberOfDays);
  } else if (/^\d+kb$/i.test(searchTerm) || /^\d+\s*kb$/i.test(searchTerm)) {
    var maxSizeInKB = parseInt(searchTerm, 10);
    console.log("Searching by KB:", maxSizeInKB);
    searchLocalStorageByImageSizeKb(resultDiv, maxSizeInKB);
  } else if (/^\d+mb$/i.test(searchTerm) || /^\d+\s*mb$/i.test(searchTerm)) {
    var maxSizeInMB = parseInt(searchTerm, 10);
    console.log("Searching by MB:", maxSizeInMB);
    searchLocalStorageByImageSizeMb(resultDiv, maxSizeInMB);
  } else {
    // Handle other cases if needed
  }

  resultDiv.focus();
}

function appendDetailsToList(resultDiv, key, formData) {
  var detailsList = document.createElement('ul');

  // var keyItem = document.createElement('li');
  // keyItem.style.fontWeight = "bold";
  // keyItem.textContent = 'Key: ' + key;
  // detailsList.appendChild(keyItem);

  Object.entries(formData).forEach(([field, value]) => {
    if (field !== 'panNumber' && field !== 'password') {
      var listItem = document.createElement('li');
      listItem.style.fontSize = '1em';
    // Adjust the size as needed

      var fieldElement = document.createElement('span');
      fieldElement.style.fontWeight = 'bold';
      fieldElement.textContent = field + ': ';

      var valueElement = document.createElement('span');
      valueElement.style.fontSize = '1em'; // Adjust the size as needed
      valueElement.textContent = value;
    

      listItem.appendChild(fieldElement);

      if (field === 'imageData') {
        var img = document.createElement('img');
        img.src = value;
        img.style.maxWidth = '100px';
        listItem.appendChild(img);

        
      } else if (field=="fileSize") {
        listItem.appendChild(valueElement);
        var separatorLine = document.createElement('hr');
        listItem.appendChild(separatorLine);
      }
      else{
        listItem.appendChild(valueElement);
      }
     
      detailsList.appendChild(listItem);
    }

  });

  resultDiv.appendChild(detailsList);
}


function searchLocalStorageByAge(resultDiv, ageInDays) {
  console.log("Searching by age:", ageInDays);
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var formData = JSON.parse(localStorage.getItem(key));
    var birthDate = new Date(formData.dob);
    var currentDate = new Date();
    var calculatedAgeInDays = (currentDate - birthDate) / (1000 * 60 * 60 * 24);

    if (calculatedAgeInDays <= ageInDays) {
      appendDetailsToList(resultDiv, key, formData);
    }
  }
}

function searchLocalStorageByImageSizeKb(resultDiv, maxSizeInKB) {
  console.log("Searching by image size:", maxSizeInKB);
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var formData = JSON.parse(localStorage.getItem(key));

    if (formData.hasOwnProperty('fileSize')) {
      var imageSizeInKB = formData.fileSize / 1024; // Convert bytes to kilobytes

      if (imageSizeInKB <= maxSizeInKB) {
        appendDetailsToList(resultDiv, key, formData);
      }
    }
  }
}

function searchLocalStorageByImageSizeMb(resultDiv, maxSizeInKB) {
  console.log("Searching by image size:", maxSizeInKB);
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var formData = JSON.parse(localStorage.getItem(key));

    if (formData.hasOwnProperty('fileSize')) {
      var imageSizeInKB = formData.fileSize / (1024 * 1024); // Convert bytes to kilobytes

      if (imageSizeInKB <= maxSizeInKB) {
        appendDetailsToList(resultDiv, key, formData);
      }
    }
  }
}