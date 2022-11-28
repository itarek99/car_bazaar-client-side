const Blog = () => {
  return (
    <div className='container mx-auto px-2'>
      <div className='max-w-4xl w-full mx-auto my-8'>
        <div className='shadow-lg p-8 mb-6'>
          <p className='font-bold text-lg'>What are the different ways to manage a state in a React application?</p>
          <p className='mt-2'>
            There are four main types of state you need to properly manage in your React apps: Local state, Global
            state, Server state, URL state. Local (UI) state - Local state is data we manage in one or another
            component. Global (UI) state - Global state is data we manage across multiple components. Server state -
            Data that comes from an external server that must be integrated with our UI state. URL state - Data that
            exists on our URLs, including the pathname and query parameters.
          </p>
        </div>
        <div className='shadow-lg p-8 mb-6'>
          <p className='font-bold text-lg'>How does prototypical inheritance work?</p>
          <p className='mt-2'>
            The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a
            method by which an object can inherit the properties and methods of another object. Traditionally, in order
            to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
          </p>
        </div>
        <div className='shadow-lg p-8 mb-6'>
          <p className='font-bold text-lg'>What is a unit test? Why should we write unit tests?</p>
          <p className='mt-2'>
            The main objective of unit testing is to isolate written code to test and determine if it works as intended.
            Unit testing is an important step in the development process, because if done correctly, it can help detect
            early flaws in code which may be more difficult to find in later testing stages.
          </p>
        </div>
        <div className='shadow-lg p-8 mb-6'>
          <p className='font-bold text-lg'>React vs. Angular vs. Vue?</p>
          <p className='mt-2'>
            React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive
            framework. They can be used almost interchangeably to build front-end applications, but they're not 100
            percent the same, so it makes sense to compare them and understand their differences. Each framework is
            component-based and allows the rapid creation of UI features. However, they all have a different structure
            and architecture — so first, we'll look into their architectural differences to understand the philosophy
            behind them.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Blog;
