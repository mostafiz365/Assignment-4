1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans :
getElementById() is used when you want to select one specific element. Id is always unique, it returns only one element.If there are no element than it returns null.

getElementsByClassName() is used to select elements by their class name. Because when you work on multiple elements you cannot use getElementById(),you should use getElementsByClassName().It returns a HTMLCollection, not just one.If there are no elements than it returns a Empty Array like HTMLCollection[].

querySelector() is used to select a CSS selector like(id, class, tag) to find an element, but it will return only the first matching element.If there are no element than it returns a null.

querySelectorAll() is also used to select a CSS selectors, but it returns all the matching elements as a list and provided a NodeList. If there are no elements than it returns a Empty NodeList[].

2. How do you create and insert a new element into the DOM?
Ans :
To create and insert a new element into the DOM, first we use       document.createElement() to create the element.
Then we can add text or content using innerText or innerHTML.
Finally, we use methods appendChild() to insert the new element inside a parent element in the DOM.

3. What is Event Bubbling? And how does it work?
Ans :
Event Bubbling is a process in JavaScript where an event starts from the target element and then moves upper section to its parent elements.

When you click on an element (like a button inside a div), the event first runs on that button. Then it “bubbles up” to the parent div, then to the body, and continues upper section until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans :
Event Delegation is a technique in JavaScript where we add an event listener to a parent element instead of adding it to multiple child elements.
It is useful because it reduces the number of event listeners, makes the code cleaner, and also works for dynamically added elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans :
preventDefault() is used to stop the default behavior of an element.
stopPropagation() is used to stop the event from moving to parent elements.
