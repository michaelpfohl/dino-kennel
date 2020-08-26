import { createForm } from './components/addDino.js'
import { printDinos } from './components/printDinos.js'
import { getFromLocal } from './helpers / data/dinos.js'

const init = () => {
    createForm();
    printDinos((getFromLocal("dinos")));
}

init();