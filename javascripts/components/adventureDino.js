import { printDinos } from './printDinos.js'
import { healthColor } from './healthColor.js'

const adventureDino = (index, item, array) => {
    $(`#adventure-${index}`).click(() => {
        item.health -= 20;
        if (item.health < 0){
            item.health = 0;
        }
        item.adventures.push(
            {date: Date(), adventure:randomAdventure(adventureList)}
            );
        healthColor(item, index);
        printDinos(array);
    })
}

const adventureInfo = (item, index) => {
    item.adventures.forEach((adventure, j) => {
        $(`#adventureList-${index}`).append(
            `<tr>
            <td>${j + 1}</td>
            <td>${adventure.date}</td>
            <td>${adventure.adventure}</td>
          </tr>`
        )
    })
}

const randomAdventure = (array) => {
    return array[Math.floor(Math.random() * array.length)];
}

const adventureList = [
    'Cave Diving',
    'Rock Climbing',
    'Dragon Slaying',
    'Asteroid Destroying',
    'Regular Walk',
    'Falling in Love'
]

export { adventureDino, adventureInfo }