### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
   React is JS framework more oftley refered to as a library that is used for creating fast user interfaces. React offers reusable components that encapulate logic and html to build complex UI's. Through use of Reacts virtual DOM we can build fast and dynamic web apps. We should use React when we want to build a site with rich user interfaces that implemet dynamic, custom and reusable components throughout it.

- What is Babel?
  Babel is a Javascript compiler that mainly takes ECMAScript 2015+ code and converts it into a backwards compatiable version for browsers. Not all browsers implement the latest version of Javascript therfore we need past versions of JS. React relies on Babel to convert JSX into working Javascript the browsers understands.

- What is JSX?
   JSX is an extension to javascript that allows us to write HTML elements and convert them in react elements. JSX is not required in React but makes it alot easier when rendering react elements to the DOM.

- How is a Component created in React?
   Components are Javascript functions that return JSX and our rendered inside our main App component. Components can be created through functions or classes. 

- What are some difference between state and props?
  Props are read-only immutable expressions passed into our components. We can never change the value of a prop inside our component. State is way to store data and keep track of information in our components between rerenderings. It is possible to change the state in our component. Props are always passed from the parent while state is manged inside the component. 

- What does "downward data flow" refer to in React?
   Respresents the path of how data is controlled in React. Data is passed from the parent component to the child component. Changes made inside the parent component will effect the child. We want to pass data in from the top down so when something changes it occurs in the parent component which then in return effects the child components.
   

- What is a controlled component?
   A controlled component handles form data by the components state. Its great for live validation on forms and the state holding our form data becomes the single source of truth for form values.

- What is an uncontrolled component?
  A uncontrolled component is one were wo do not store the from data is state. We use the DOM to recive our form data. We cannot offer live validation and there is no state actively storing the form values.

- What is the purpose of the `key` prop when rendering a list of components?
  The key prop is like an id for our component. It gives it a listing in memory for react to keep track of what changes in our list.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  If your order of items change this can cause poor performance and issues within the component state. You want something unique that represents your list items.

- Describe useEffect.  What use cases is it used for in React components?
  The useEffect hook allows us to manage side effects in our React components. Fetching data, seting up subscriptions, and manually changing the DOM are examples of side effects. Sometimes we want to run something after our component has rendered so we can show something to the user before making a request that takes time. useEffect runs after the intial render and depending on what we pass to is dependacies will run when a change in those dependacies occur.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
   useRef is a mutatable object were .currently property is assigned to the intial value. It is mostly used to access DOM Elements. The object will represent when a DOM element chages but will not cause a re render. The value stored in a useRef object persits through the lifetime of the component. We have access to a ref property in DOM elements.

- When would you use a ref? When wouldn't you use one?
  Use a ref when you dont want your component re rendered if ref changes. When you need to clear an interval or change something inside a DOM element.

- What is a custom hook in React? When would you want to write one?
  A custom hook is when you want to spread similiar funtionality throught multiple components that effect there state. It reduces code and offers better encapsulation.
