/*
 * 07 JS - DOM and Events
 */

/**
 * Follow me: 
 * querySelectorAll() returns a nodelist
 * Looping through a nodelist with a forEach() and adding a CSS class
 */


/* 
 *  Assignment 1: 
 *  Add the class=green to the paragraphs which contain lorem ipsum:
 *  Follow the steps below in the comments
 */

// Create a DOM query where you select all the elements with class=lorem: 

// Add the class called 'green' to the selected items:


/** 
 *  Assignment 2: 
 *  Create a h1 and add it to the <header> element:
 *  Follow the steps below in the comments
 */

// Create the new h1 element:

// Create the text content (just some text) to the h1 element:

// Append the new h1 element to the <header>:



/** 
 *  Assignment 3: 
 *  Add the class: larger-text to the first paragraph in the section:
 *  Follow the steps below in the comments
 */

// Create a DOM query where you select the paragraph:

// Add the CSS class to the paragraph element:


/* 
 *  Assignment 4: 
 *  In the style.css there is a declaration called '.dark-mode'.
 *  Create a script that adds the .dark-mode to the body element
 *  when the user clicks on the button called 'white/dark mode':
 *  Follow the steps below in the comments
 */

// Create a DOM query which selects the button:

// Add an eventlistener on the button and in the function toggle 
// the .dark-mode class on the body:



/* 
 * Assignment 5: 
 *  Create a new CSS declaration in style.css and find a way to apply 
 *  it to a part of the HTML. Consider what type of event should happen
 *  before the CSS class is added to the HTML.
 *  Below is an example, which you can try to figure out how works and 
 *  add in the comments:
 */

// 
window.addEventListener('load', pause);

// 
function pause() {
    setTimeout(() => {
        const h2 = document.querySelector('h2');
        h2.classList.add('slide-in-bck-right');
    }, 2000)
}


/* 
 *  Assignment 6: 
 *  In the select list you can choose if you are 18 year and above or not.
 *  Create a script which shows the image of the German beer in the brwoser 
 *  if the user selects that they are 18 years or above: 
 *  Follow the steps below in the comments
 */

// Add an eventlistener on the <select> element.
// Figure out what type of event to use when the value in the 
// select is changed - see page 247 in the JS book for a hint:

// the function in the eventlistener, which is triggered when the user 
// selects 'yes' or 'no' in the options:

// in the function create an if else which evaluates if the value 
// of the <select> is equal to 'yes'. If that's the case - remove 
// the class called 'beer-hide', otherwise add the class 'beer-hide':