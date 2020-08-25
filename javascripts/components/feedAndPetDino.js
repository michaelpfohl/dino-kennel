import { printDinos } from './printDinos.js'
import { healthColor } from './healthColor.js'

const feedAndPetDino = (index, item, array) => {
    $(`#feed-${index}`).click( () => {
        item.health += 10;
        if (item.health > 100){
            item.health = 100;
        }
        healthColor(item, index);
        printDinos(array);
    });
    $(`#pet-${index}`).click( () => {
        item.health += 3;
        if (item.health > 100){
            item.health = 100;
        }
        healthColor(item, index);
        printDinos(array);
    });
}

export { feedAndPetDino }