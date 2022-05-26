import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2 className="text-4xl text-secondary">This is blogs </h2>
            <div>
                <h2> How will you improve the performance of a React Application?</h2>
                <p>The browsers provide this feature in dev tools and allow us to audit the application. This includes measuring the performance of React applications. Another way is by analyzing React components with Chromes performance tab. <br />
                    Another useful way to improve the performance of React app would be to avoid any inline function definition inside the render function.</p>

            </div>
            <div>
                <h2>What are the different ways to manage a state in a React application?</h2>
                <p>There are several other ways to manage state in React, including the use of: <br />

                    Every React component has a built-in state. This state is an object which stores the property values that belong to a component. State is able to keep data from different components in-sync because each state update re-renders all relevant component. The built-in way that React provides for setting component states is by using setState() and adding “local state” to a class</p>
            </div>
            <div>
                <h2> How does prototypical inheritance work?</h2>
                <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
            </div>
            <div>
                <h2> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <br />
                <p>states are a data store which contains the data of a component.
                    The view of a component renders based on the state.
                    When the view needs to change something on the screen, that value should be supplied from the store.
                    To make this happen, React provides setState() function which takes in an object of new states and does a compare and merge(similar to object.assign()) over the previous state and adds the new state to the state data store.
                    Whenever the data in the state store changes, react will trigger an re-render with the new state which the view consumes and shows it on the screen.
                    This cycle will continue throughout the component's lifetime.</p>
            </div>
            <div>
                <h2>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p>To find the product of elements of an array.

                    create an empty variable. (product)
                    Initialize it with 1.
                    In a loop traverse through each element (or get each element from user) multiply each element to product.
                    Print the product.</p>
            </div>
            <div>

                <h2> What is a unit test? Why should write unit tests?</h2>
                <p>Unit testing allows the programmer to refactor code at a later date, and make sure the module still works correctly (i.e. Regression testing). The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed</p>
            </div>
        </div>
    );
};

export default Blogs;