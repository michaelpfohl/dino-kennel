import { printDinos } from './printDinos.js'

const healthColor = (item, index, array) => {
    if (item.health >= 60){
        $(`#healthBar-${index}`).removeClass('bg-warning bg-danger').addClass('bg--success');
    } else if (item.health < 60 && item.health > 20){
        $(`#healthBar-${index}`).removeClass('bg-success bg-danger').addClass('bg--warning');
    } else {
        $(`#healthBar-${index}`).removeClass('bg-warning bg-success').addClass('bg-danger');
    }
    printDinos(array);
}

export { healthColor }