const healthColor = (item, index) => {
    if (item.health >= 60){
        return 'bg-success';
    } else if (item.health < 60 && item.health > 20){
        return 'bg-warning';
    } else {
        return 'bg-danger';
    }
}

export { healthColor }