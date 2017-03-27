# Plugins for jsDoc
Various plugins for Various plugins for [jsDoc](http://usejsdoc.org/index.html)

## Summary
Plugins I created for jsDoc.

#### Categories (category.js)
A JSdoc plugin that allows for adding categories to any data type (class/function/method/etc).

By itself, this does nothing other than allowing for use of `@category categoryName`

Template makers can then use the `doclet.category` property to group data in the navigation or output it elsewhere.

#### References (references.js)

 A JSdoc plugin that creates a linkable `reference` category (aliased to `definition` and `terminology`).
 Useful when you have something that isn't easily defined elsewhere, such as an options object that is used repeatedly or a return
 object that is returned by many different functions. Or you simply want to define something or use terminology that needs 
 to be defined. Items in `reference` 

 Items in `reference` can be linked to per normal linking. All items are in the `global` scope, so they will not follow a namespace or
 module pattern, even if you try to make them one.

 example:
 ```
 @reference {object} Options
 @property {number} property1 - some option property that is a number
 @property {array} property2 - some option property that is a number
 ```
 
 example 2:
 ```
 @definition confusingWord - some word you are using that needs clarification/context 
								or in leiu of repeating a paragraph over and over.
 ```
 
## Installing

Download the `.js` file that you want and put it in your `jsdoc/plugins` directory.

Then edit `jsdoc/conf.json` and add `plugins/filename` (without the .js) to the `plugins` array.

