const manager = require('./LoadingManager')

function secondary() {
    manager.markLoaded('b')
}

module.exports = secondary