const dinos = [];

const getDinos = () => {
    return dinos;
}

const setDinos = (value) => {
    dinos.push(value);
}

const sendToLocal = (key, value) => {
    setDinos(value);
    let passedArray = JSON.stringify(getDinos());
    localStorage.setItem(key, passedArray);
}
  
const getFromLocal = (key) => {
    let retrievedValue = localStorage.getItem(key);
    console.log(retrievedValue);
    if (retrievedValue === null){
        return [];
    } else {
        console.log(JSON.parse(retrievedValue));
        return JSON.parse(retrievedValue);
    }
}

export { sendToLocal, getFromLocal }