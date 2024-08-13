// 1. Create an array of allowed passwords
const allowedPasswords = ["password123", "securePassword", "letmein"];

// 2. Login function to check if the password is included in the allowed passwords array
const login = (password) => {
    return allowedPasswords.includes(password);
};

// 3. Function that returns a Promise to check the password validity status
const checkPassword = (password) => {
    return new Promise((resolve, reject) => {
        if (login(password)) {
            resolve({ status: true });
        } else {
            reject({ status: false });
        }
    });
};

// 4. Function to check the password using Promises
const checker = (password) => {
    checkPassword(password)
        .then((result) => {
            console.log(`Password "${password}" is valid. Status: ${result.status}`);
        })
        .catch((error) => {
            console.log(`Password "${password}" is invalid. Status: ${error.status}`);
        });
};

// 5. Send passwords to the checker function
checker("password123");
checker("letmein");
checker("incorrectpassword");
