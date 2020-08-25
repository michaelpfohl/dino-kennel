import { getDinos } from '../helpers / data/dinos.js'
import { printDinos } from './printDinos.js'

const createForm = () => {
    $('#addDinoButton').on('click', () => {
        $('#addButtonContainer').html(
            `<form class="mt-4 add--form">
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputName">Name</label>
                <input type="string" class="form-control" id="inputName" placeholder="Name">
              </div>
              <div class="form-group col-md-6">
                <label for="inputOwner">Owner</label>
                <input type="string" class="form-control" id="inputOwner" placeholder="Owner">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputAge">Age</label>
                <input type="string" class="form-control" id="inputAge" placeholder="Age">
              </div>
              <div class="form-group col-md-6">
                <label for="inputType">Type</label>
                <input type="string" class="form-control" id="inputType" placeholder="Type">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-12">
                <label for="inputImage">Image URL</label>
                <input type="string" class="form-control" id="inputImage" placeholder="Image URL">
              </div>
            </div>
            <div class="d-flex justify-content-center mb-2">
                <div id="emptyFormError" class="error"></div>
            </div>
            <div class="d-flex justify-content-center">
                <button id="submitDinoForm" class="btn btn-outline-info" type="button">Submit</button>
            </div>
          </form>`
        )
    submitForm();
    });
}

const submitForm = () => {
    $('#submitDinoForm').click(() => {
        if ($('#inputName').val() !== '' &&
            $('#inputOwner').val()!== '' &&
            $('#inputAge').val() !== '' &&
            $('#inputType').val() !== '' &&
            $('#inputImage').val() !== ''){
                let newDino = {
                    name: $('#inputName').val(),
                    owner: $('#inputOwner').val(),
                    age: $('#inputAge').val(),
                    type: $('#inputType').val(),
                    image: $('#inputImage').val(),
                    health: 75
                };
                getDinos().push(newDino);
                printDinos(getDinos());
                clearForm(); 
            } else {
                $('#emptyFormError').html(`Please fill out all fields!`);
            }
    })
}

const clearForm = () => {
    $('#addButtonContainer').html(
        `<div class="container d-flex justify-content-center" id="addButtonContainer">
            <button id="addDinoButton" type="button" class="btn btn-outline-primary btn-lg mt-4">+ Add Dino</button>
        </div>`
    );
    createForm();
}

export { createForm }