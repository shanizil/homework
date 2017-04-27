var eventEmitter = require('events');

module.exports = class Dart extends eventEmitter {
    constructor(){
        super();
        this.throwing = 0;
    }
    DartsHit(num){
        this.throwing +=num;
        this.emit('dartsChange');
        this.emit('successThrow');
        }
    DartsMiss(num){
        this.throwing -=num;
        this.emit('dartsChange');
        this.emit('fallThrow');
        }

}
