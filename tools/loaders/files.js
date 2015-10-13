/**
* ------------------------------------------------------------------------
* File loaders templates, html's, json etc
* ------------------------------------------------------------------------
* @todo add json loader
*/
module.exports = [{
    test: /\.html$/,
    loader: 'raw!html-minify'
},{
    test: /\.hbs\.html$/,
    loader: 'handlebars-loader!html-minify'
}];
