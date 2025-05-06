What is CSS?
- CSS stands for Cascading Style Sheets
- CSS describes how HTML elements are to be displayed on screen, paper, or in other media
- CSS saves a lot of work. It can control the layout of multiple web pages all at once
- External stylesheets are stored in CSS files

![alt text](css.gif)

The selector points to the HTML element you want to style.

The declaration block contains one or more declarations separated by semicolons.

Each declaration includes a CSS property name and a value, separated by a colon.

Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

CSS selectors are patterns used to select and style HTML elements. They are a fundamental part of CSS and allow you to target specific elements on a webpage.

## Types of CSS Selectors

CSS selectors can be categorized into five main groups:

- **Simple selectors**: Select elements based on name, id, or class
- **Combinator selectors**: Select elements based on specific relationships
- **Pseudo-class selectors**: Select elements based on certain states
- **Pseudo-elements selectors**: Select and style part of an element
- **Attribute selectors**: Select elements based on attributes or attribute values[1]

## Basic Selectors

### Element Selector
Selects HTML elements based on the element name:
```css
p {
  color: red;
}
```
This applies to all `` elements on the page[1][5].

### ID Selector
Uses the id attribute with a hash (#) character:
```css
#demo {
  background-color: #fcded4;
}
```
An ID must be unique within a page[1][5].

### Class Selector
Uses the class attribute with a period (.) character:
```css
.main {
  color: red;
}
```
You can also target specific elements with a class:
```css
p.main {
  color: red;
}
```

### Universal Selector
Uses an asterisk (*) to select all elements:
```css
* {
  text-align: center;
}
```

## Selector Lists (Grouping)

When multiple selectors share the same styles, you can group them with commas:
```css
h1, h2, p {
  color: blue;
}
```
This applies the same style to all h1, h2, and p elements[2][3][5].

## Combinator Selectors

These selectors establish relationships between elements:

- **Descendant Selector (space)**: `div p` selects all p elements inside div elements
- **Child Selector (>)**: `div > p` selects all p elements that are direct children of div elements
- **Adjacent Sibling Selector (+)**: `div + p` selects the first p element that immediately follows a div
- **General Sibling Selector (~)**: `div ~ p` selects all p elements that follow a div element[5]

CSS selectors are powerful tools for targeting specific elements with precision, allowing for complex styling patterns while maintaining clean, organized code.

There are four main ways to include CSS in your HTML file:

## Inline CSS

Inline CSS applies styles directly to individual HTML elements using the `style` attribute:

```html
<p style="color: blue; font-size: 16px;">This is a styled paragraph.</p>

```

This method is useful for:
- Quick styling without external files
- Overriding external styles for specific elements
- Applying styles dynamically with JavaScript
- Prototyping before moving styles to a stylesheet[2]

However, inline styles should be used sparingly as they mix content with presentation and make maintenance difficult.

## Internal/Embedded CSS

Internal CSS uses the `` tag within the `` section:

```html

<head>
  <style>
    body {
      background-color: green;
    }
    p {
      color: yellow;
      font-size: 25px;
    }
  </style>
</head>

```

This applies styles to all matching elements on the current page only[3].

## External CSS

External CSS stores styles in a separate .css file that's linked to HTML documents:

```html

  <head>
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>


```

This is the most common and recommended method as it:
- Separates content from presentation
- Allows reusing styles across multiple pages
- Improves maintainability and performance[3][4]

## Imported CSS

Imported CSS allows you to import one stylesheet into another using the `@import` rule, either within a stylesheet or inside a `` tag[3].

CSS inclusion follows a cascading order where inline styles take highest precedence, followed by internal and external styles[5].

# Css Comments
A CSS comment is placed inside the <style> element, and starts with 

```css
<style>
/* This is a single-line comment */
p {
  color: red;
}
</style>
```