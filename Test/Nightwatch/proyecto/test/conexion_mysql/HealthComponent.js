// HealthComponent.js

var health = 10;

var getHit = function (amount) {

    health -= amount;

}

module.exports.health = health; // 1
module.exports.getHit = getHit;
