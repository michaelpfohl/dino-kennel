import { printDinos } from './printDinos.js'

const feedDino = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        item.health += 10;
        console.log(item);
        printDinos(array);
    });
}

export { feedDino }