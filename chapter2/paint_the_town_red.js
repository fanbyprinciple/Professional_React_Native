function paintRed(vehicle){
    const _vehicle = {...vehicle}
    _vehicle.color = 'red'
    return _vehicle
}

let bus = {
    color: 'blue'
}

bus = paintRed(bus)
console.log(bus.color)
