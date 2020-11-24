# Dino-Kennel
![Home Page](/images/dino-kennel.gif)

## Features:
- Upon clicking the Add Dino button a form populates where the user can input information for a Dino. 
- From there the Dino will be placed in the Kennel with a default of 75% health.
- The user can feed the Dino to raise health by 10% and feed the Dino to raise health by 3%.
- The user can also send the Dino on an adventure, which will reduce the Dino's health by 20% but greatly enrich it's life. 
- If the user wishes to see what adventures the Dino has been on then they can click the view button to open a modal. 
- Within that modal is more specific information about the Dino and all of the adventures that it has been on. 
- If the user wishes to set the Dino free then the user can press the remove button to remove the Dino from the page. 
- If the Dino falls below 50% health then the Dino will be moved into the Hospital. 
- If the Dino reaches 0% health then the Dino will be buried in the graveyard.
- The Dino's health color is a handy indicator of the Dino's health with green being > 60%, yellow > 20% and red < 20%.

## Guide:
![Help Modal](/images/dinoKennelHelp.png)

## Code Snippet
- The following logic demonstrates the modularization of the code with the same variables being applied throughout multiple functions imported from different files.
```
const printDinos = (array) => {
    clearDOM();
    array.forEach((item, index) => {
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
```


Check out the app [here!](https://dino-kennel.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/df78b1b8-0d92-4313-8642-e41930705f59/deploy-status)](https://app.netlify.com/sites/dino-kennel/deploys)
