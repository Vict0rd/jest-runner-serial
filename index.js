const TestRunner = require('jest-runner').default || require('jest-runner')

class SerialRunner extends TestRunner {
  constructor(...attr) {
    super(...attr)
    this.isSerial = true
  }
}

module.exports = SerialRunner
