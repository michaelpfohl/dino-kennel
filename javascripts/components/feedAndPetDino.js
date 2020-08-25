import { printDinos } from './printDinos.js'

const feedAndPetDino = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        item.health += 10;
        printDinos(array);
    });
    $(`#pet-${index}`).click( () => {
        item.health += 3;
        printDinos(array);
    });
}

export { feedAndPetDino }