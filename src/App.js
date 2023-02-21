import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { CreateItem, Header ,HomePageContainer,Home,PaidCourses,Footer} from './components';
import {AnimatePresence} from 'framer-motion'
import CourseInfo from './components/courses/CourseInfo';
import Apply from './components/Apply';
import CourseNav from './components/CourseNav';

import Login from './components/Login';
import BlogMainPage from './components/blog/BlogMainPage';
import Article from './components/blog/Article';



const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-gray-100'>
            <Header/>
            <CourseNav/>
            <main className='mt-[100px] px-5 py-4 w-full'> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/createItem' element={<CreateItem/>}/>
                <Route path='/internship' element={<Apply/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/ml/:python' element={<BlogMainPage/>}/>
                <Route path='/paidcourse' element={<PaidCourses/>}/>
                <Route path='/product/:title' element={<BlogMainPage/>}/>
            </Routes>
            </main>
            <Footer/>
        </div>
        </AnimatePresence>
    );
};

export default App;