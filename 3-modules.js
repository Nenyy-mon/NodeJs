// Modules
//CommonJS every file is module
//Modules - Encapsulated Code(onlyShareMinimum)
const names = require('./4-names.js')
const sayHi = require('./5-utils.js')
const data = require('./6-alternative-flavor.js')
require('./7-mindGrenade.js')
sayHi(names.john)
sayHi(names.susan)