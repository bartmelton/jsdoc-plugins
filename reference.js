/**
 *  
 * A JSdoc plugin that creates a linkable `reference` category (aliased to `definition` and `terminology`).
 * Useful when you have something that isn't easily defined elsewhere, such as an options object that is used repeatedly or a return
 * object that is returned by many different functions. Or you simply want to define something or use terminology that needs 
 * to be defined. 
 *
 * Items in `reference` can be linked to per normal linking. All items are in the `global` scope, so they will not follow a namespace or
 * module pattern, even if you try to make them one.
 * 
 * Downloadable from https://github.com/bartmelton/jsdoc-plugins
 * 
 * example:
 * ```
 * @reference {object} Options
 * @property {number} property1 - some option property that is a number
 * @property {array} property2 - some option property that is a number
 * ```
 * 
 * example 2:
 * ```
 * @definition confusingWord - some word you are using that needs clarification/context or in leiu of repeating a paragraph over and over.
 * ```
 */
 

exports.defineTags = function(dictionary) {
	dictionary.defineTag('reference', {
        mustHaveValue: true,
		canHaveType: true,
        canHaveName: true,
		onTagged: function(doclet, tag) {
			doclet.addTag('kind', 'reference');
			doclet.scope = 'global';
            delete doclet.memberof;
			if (tag.value && tag.value.name) {
				doclet.addTag('name', tag.value.name);
			}
			else if (tag.value && tag.value.description) { // as in a long tag
				doclet.addTag('name', tag.value.description);
			}
			else if (tag.text) { // or a short tag
				doclet.addTag('name', tag.text);
			}
			if (tag.value && tag.value.type) {
				// Add the type names and other type properties (such as `optional`).
				// Don't overwrite existing properties.
				Object.keys(tag.value).forEach(function(prop) {
					if (!doclet.hasOwnProperty(prop) ) {
						doclet[prop] = tag.value[prop];
					}
				});
			}
        },
        
    }).synonym('definition').synonym('terminology');
};