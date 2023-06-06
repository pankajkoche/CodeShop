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
import InternshipRegistrationForm from './components/Internship';
import BlogForm from './components/blog/BlogForm';



const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <div className='w-screen flex flex-col bg-gray-100 h-screen justify-between '>
            <Header/>
            <CourseNav/>
            <main className='mt-[100px] px-5 py-4 w-full'> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/intenship' element={<InternshipRegistrationForm/>}/>
                <Route path='/createItem' element={<CreateItem/>}/>
                <Route path='/internship' element={<Apply/>}/>
                <Route path='/login' element={<BlogForm/>}/>
                <Route path='c/:python/:python' element={<BlogMainPage/>}/>
                <Route path='/paidcourse' element={<PaidCourses/>}/>
                <Route path='g/:product/:title' element={<BlogMainPage/>}/>
            </Routes>
            </main>
            <Footer/>
        </div>
        </AnimatePresence>
    );
};

export default App;