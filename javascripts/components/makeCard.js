import { healthColor } from './healthColor.js'

const makeCard = (item, index) => {
    let domstring = `<div class="modal fade" id="modal-${index}" tabindex="-1" role="dialog" aria-labelledby="modalLabel-${index}" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel-${index}">Dino Profile</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="d-flex">
                <img class="modal--image" src="${item.image}" alt="${item.name}">
                <div class="modal--content">
                    <h1>${item.name}</h1>
                    <p>Owner: ${item.owner}</p>
                    <p>Type: ${item.type}</p>
                    <p>Age: ${item.age}</p>
                </div>
            </div>
            <div class="progress mt-3">
              <div id="healthBar-${index}" class="progress-bar progress-bar-striped progress-bar-animated ${healthColor(item, index)}" role="progressbar" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.health}%">${item.health}%</div>
            </div>
            <div class="mt-3">
                <table class="table table-hover">
                    <thead class="table--head">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Date</th>
                        <th scope="col">Type</th>
                    </tr>
                    </thead>
                    <tbody id="adventureList-${index}"></tbody>
                </table>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>

    <div class="card dino--card m-2" style="width: 20rem;">
    <img class="card-img-top p-1" src="${item.image}" alt="${item.name}">
    <div class="card-body">
      <div class="d-flex justify-content-center">
        <h5 class="card-title card--name mx-auto">${item.name}</h5>
      </div>
      <div class="progress">
        <div id="healthBar-${index}" class="progress-bar progress-bar-striped progress-bar-animated ${healthColor(item, index)}" role="progressbar" aria-valuenow="${item.health}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.health}%">${item.health}%</div>
      </div>
      <div class="d-flex justify-content-around mt-3 m-2">
        <button id="feed-${index}" type="button" class="btn btn-outline-success"><i class="fas fa-drumstick-bite mx-4"></i></button>
        <button id="pet-${index}" type="button" class="btn btn-outline-success"><i class="fas fa-hand-sparkles mx-4"></i></button>
      </div>
      <div class="d-flex justify-content-around m-2">
        <button id="adventure-${index}" type="button" class="btn btn-outline-warning"><i class="fas fa-hiking mx-4"></i></button>
        <button id="remove-${index}" type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt mx-4"></i></button>
      </div>
      <div class="d-flex justify-content-around mt-3 m-2">
        <button id="view-${index}" type="button" class="btn btn-outline-light" data-toggle="modal" data-target="#modal-${index}"><i class="fas fa-eye mx-5"></i></button>
      </div>
    </div>
  </div>`
  return domstring;
}

export { makeCard }