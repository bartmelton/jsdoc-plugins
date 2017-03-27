/**
 * A JSdoc plugin that allows for adding categories to any data type (class/function/method/etc).
 *
 * By itself, this does nothing other than allowing for use of `@category categoryName`
 * 
 * Template makers can then use the `doclet.category` property to group data in the navigation or output it elsewhere.
 *
 * Downloadable from https://github.com/bartmelton/jsdoc-plugins
 */

exports.defineTags = function(dictionary) {
    dictionary.defineTag('category', {
        mustHaveValue: true,
        onTagged: function(doclet, tag) {
			doclet.category=tag.value;
        }
    });
};