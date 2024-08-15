## Multi-line strings
```
console.log(`string text line 1
string text line 2`);
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#multi-line_strings

## String interpolation
```
console.log(\`text ${a + b}\`)
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#string_interpolation

## Nesting templates
```
const classes = `header ${
  isLargeScreen() ? "" : `icon-${item.isCollapsed ? "expander" : "collapser"}`
}`;
```
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#nesting_templates

## Tagged templates
a function that can parse and change template.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates