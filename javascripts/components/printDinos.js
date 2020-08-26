import { makeCard } from './makeCard.js'
import { feedAndPetDino } from './feedAndPetDino.js'
import { removeDino } from './removeDino.js'
import { adventureDino, adventureInfo } from './adventureDino.js'

const printDinos = (array) => {
    clearDOM();
    array.forEach((array, item, index) => {
        if (item.health >= 50){
            $('#kennel').append(makeCard(item, index))
        } else if (item.health < 50 && item.health > 0){
            $('#hospital').append(makeCard(item, index))
        } else {
            $('#graveyard').append(makeCard(item, index))
        }
        feedAndPetDino(index, item, array);
        adventureDino(index, item, array);
        adventureInfo(item, index);
        removeDino(index, array);     
    })
}

const clearDOM = () => {
    $('#kennel').html('');
    $('#hospital').html('');
    $('#graveyard').html('');
}

export { printDinos }