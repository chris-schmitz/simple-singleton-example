const manager = require('./LoadingManager')
const secondary = require('./secondary')

console.log("Looking at the manager's properties")
console.log(manager)
console.log("")

console.log("Check all loaded: before marking anything")
console.log(`All loaded?: ${manager.allLoaded}`)
console.log("")
manager.markLoaded('a')

console.log("Check all loaded: after marking the first section")
console.log(`All loaded?: ${manager.allLoaded}`)
console.log("")

secondary()

console.log("Check all loaded: after marking the last section")
console.log(`All loaded?: ${manager.allLoaded}`)
console.log("")

console.log("Looking at the manager's properties")
console.log(manager)