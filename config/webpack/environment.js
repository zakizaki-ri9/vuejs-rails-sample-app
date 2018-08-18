const { environment } = require('@rails/webpacker')
const vue =  require('./loaders/vue')
environment.loaders.append('vue', vue)

const webpack = require('webpack')
environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery/dist/jquery',
        jQuery: 'jquery/dist/jquery',
        Popper: 'popper.js/dist/popper'
    })
)

module.exports = environment
