let browserID;
const localStorageKey = null;

if (localStorage.getItem(localStorageKey) !== null) {
  // the variable exists in local storage, so retrieve its value
  browserID = localStorage.getItem(localStorageKey);
} else {
  // generate a random string of 10 characters
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  // store the random string in local storage and set the BrowserID variable
  localStorage.setItem(localStorageKey, result);
  browserID = result;
}