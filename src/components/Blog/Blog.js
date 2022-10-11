import React from 'react';

const Blog = () => {
    return (
        <div className="md:p-12 p-3">
            <div className='border-2 border-gray-300 md:p-10 p-3 rounded-md bg-slate-200 shadow-lg mb-6'>
                <h2 className='text-2xl font-semibold first-letter:text-4xl mb-2'>Q. What is the purpose of React Router</h2>
                <p className='text-left md:text-center'>React Router is an API for React applications. Most current code is written with React Router 3, although version 4 has been released. React Router uses dynamic routing.

                    React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.

                    By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.
                </p>
            </div>
        </div>
    );
};

export default Blog;