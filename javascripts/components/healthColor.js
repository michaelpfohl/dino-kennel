const healthColor = (item, index) => {
    if (item.health >= 60){
        $(`#healthBar-${index}`).removeClass('bg-warning bg-danger').addClass('bg-success');
    } else if (item.health < 60 && item.health > 20){
        $(`#healthBar-${index}`).removeClass('bg-success bg-danger').addClass('bg-warning');
    } else {
        $(`#healthBar-${index}`).removeClass('bg-warning bg-success').addClass('bg-danger');
    }
    console.log($(`#healthBar-${index}`));
}

export { healthColor }