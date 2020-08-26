const dinos = [];

// const getDinos = () => {
//     return dinos;
// }

const sendToLocal = (key, value) => {
    let passedValue = JSON.stringify(value);
    localStorage.setItem(key, passedValue);
  }
  
const getFromLocal = (key) => {
    let retrievedValue = localStorage.getItem(key);
    return JSON.parse(retrievedValue);
  }

export { sendToLocal, getFromLocal }