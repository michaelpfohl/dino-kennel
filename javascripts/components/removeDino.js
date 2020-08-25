import { printDinos } from './printDinos.js'

const removeDino = (index, array) => {
    $(`#remove-${index}`).click(() => {
            array.splice(index, 1);
            printDinos(array);
        })
}

export { removeDino }