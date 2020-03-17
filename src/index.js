const ensureIterable = require('type/iterable/ensure')
const ensureString = require('type/string/ensure')
const path = require('path')
const { Component } = require('@serverless/core')

const DEFAULTS = {
  runtime: 'Php7',
  handler: 'serverless-handler.handler'
}

const framework = 'thinkphp'

class TencentComponent extends Component {
  async default(inputs = {}) {
    inputs.include = ensureIterable(inputs.include, { default: [], ensureItem: ensureString })
    inputs.include = inputs.include.concat([path.join(__dirname, 'shims')])
    inputs.exclude = ensureIterable(inputs.exclude, { default: [], ensureItem: ensureString })
    inputs.exclude.push('runtime/**')

    inputs.runtime = DEFAULTS.runtime
    inputs.handler = DEFAULTS.handler

    const Framework = await this.load('@serverless/tencent-framework')

    const framworkOutpus = await Framework({
      ...inputs,
      ...{
        framework
      }
    })

    this.state = framworkOutpus
    await this.save()
    return framworkOutpus
  }

  async remove(inputs = {}) {
    const Framework = await this.load('@serverless/tencent-framework')
    await Framework.remove(inputs)
    this.state = {}
    await this.save()
    return {}
  }
}

module.exports = TencentComponent
