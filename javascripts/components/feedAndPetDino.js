import { printDinos } from './printDinos.js'

const feedAndPetDino = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        item.health += 10;
        console.log(item);
        printDinos(array);
    });
    $(`#pet-${index}`).click( () => {
        item.health += 3;
        console.log(item);
        printDinos(array);
    });
}

export { feedAndPetDino }