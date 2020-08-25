const printDinos = (array) => {
    $('#kennel').html('');
    array.forEach((item, index) => {
        $('#kennel').append(
            `<div class="card dino--card m-2" style="width: 20rem;">
            <img class="card-img-top p-3" src="${item.image}" alt="${item.name}">
            <div class="card-body">
              <div class="d-flex justify-content-center">
                <h5 class="card-title card--name mx-auto">${item.name}</h5>
              </div>
              <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
              </div>
              <div class="d-flex justify-content-around mt-3 m-2">
                <button id="feed-${index}" type="button" class="btn btn-outline-success"><i class="fas fa-drumstick-bite mx-4"></i></button>
                <button id="pet-${index}" type="button" class="btn btn-outline-success"><i class="fas fa-hand-sparkles mx-4"></i></button>
              </div>
              <div class="d-flex justify-content-around m-2">
                <button id="adventure-${index}" type="button" class="btn btn-outline-warning"><i class="fas fa-hiking mx-4"></i></button>
                <button id="delete-${index}" type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt mx-4"></i></button>
              </div>
              <div class="d-flex justify-content-around mt-3 m-2">
                <button id="view-${index}" type="button" class="btn btn-outline-light"><i class="fas fa-eye mx-5"></i></button>
              </div>
            </div>
          </div>`)
    })
}

export { printDinos }