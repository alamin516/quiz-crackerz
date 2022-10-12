import React from 'react';

const Blog = () => {
    return (
        <div className="md:p-12 p-3">
            <div className='border-2 border-gray-300 md:p-10 p-3 rounded-md bg-slate-200 shadow-lg mb-6'>
                <h2 className='text-2xl font-semibold first-letter:text-4xl mb-2'>Q. What is the purpose of React Router?</h2>
                <p className='text-left'>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.

                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                </p>
            </div>
            <div className='border-2 border-gray-300 md:p-10 p-3 rounded-md bg-slate-200 shadow-lg mb-6'>
                <h2 className='text-2xl font-semibold first-letter:text-4xl mb-2'>Q. How does context API work?</h2>
                <p className='text-left'>The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it.
                    <br />
                    Let’s refactor the app and demonstrate what it can do. In a few words, the Context API allows you to have a central store where your data lives (yes, just like in Redux). The store can be inserted into any component directly. You can cut out the middleman!
                    <br />
                    Once that’s done, we can import the context and use it to create our provider, which we’re calling MyProvider. In it, we initialize a state with some values, which you can share via value prop our provider component. In our example, we’re sharing this.state.cars along with a couple of methods that manipulate the state. Think of these methods as reducers in Redux.
                </p>
            </div>
            <div className='border-2 border-gray-300 md:p-10 p-3 rounded-md bg-slate-200 shadow-lg mb-6'>
                <h2 className='text-2xl font-semibold first-letter:text-4xl mb-2'>Q. What is React’s useRef?</h2>
                <p className='text-left'>useRef is one of the standard hooks provided by React. It will return an object that you can use during the whole lifecycle of the component.

                    The main use case for the useRef hook is to access a DOM child directly. I’ll show exactly how to do that in another section.

                    Although accessing the DOM is the main use case, it doesn’t mean it’s the only one! useRef can also be very useful to hold a mutable value across different renders of your component.

                    For example, it’s often quite handy when using external libraries that weren’t made with React in mind.

                    <br />
                    Ref means just reference, so it can be a reference to anything (DOM node, Javascript value, etc). The useRef hook returns a mutable object which doesn’t re-render the component when it’s changed. Think it like useState, but unlike useState, doesn’t trigger re-render of the component. The object that useRef returns have a current property that can hold any modifiable value.
                </p>
            </div>
        </div>
    );
};

export default Blog;