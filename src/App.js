import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { CreateItem,  HomePageContainer,Home,PaidCourses,Footer} from './components';
import {AnimatePresence} from 'framer-motion'
import CourseInfo from './components/courses/CourseInfo';
import Apply from './components/Apply';


import Login from './components/Login';
import BlogMainPage from './components/blog/BlogMainPage';
import Article from './components/blog/Article';
import InternshipRegistrationForm from './components/Internship';
import HTMLToStringConverter from './components/HtmlToString';
import Header from './components/home/Header/Header';
import HeaderBottom from './components/home/Header/HeaderBottom';
import Practice from './components/practice/Practice';
import Abc from './components/abs';
import JobDetails from './components/JobDetails';
import DSAComponent from './components/DSA/DSAComponent';
import Post from './components/DSA/Post';
import ProblemList from './components/practice/ProblemList';

const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <div  className='mb-[58px] '>
        <Header/>
        </div>            
            <HeaderBottom/>        
            <main className='w-full relative font-bodyFont px-4'>        
            <Routes>
                <Route path='/' element={<Home/>}/>
                
                <Route path='/cources/*' element={<CourseInfo/>}/>
                <Route path='/createItem' element={<CreateItem/>}/>
                <Route path='/internship' element={<Apply/>}/>
                <Route path='/login' element={<HTMLToStringConverter/>}/>
                <Route path='/:tutorial' element={<BlogMainPage/>}/>
                <Route path='/paidcourse' element={<PaidCourses/>}/>
                <Route path='/learn/:title' element={<Article/>}/>
                <Route path='/practice' element={<ProblemList/>}/>
                <Route path='/beautiful' element={<Abc/>}/>
                <Route path='/jobs' element={<JobDetails/>}/>
                <Route path='/dsa-sheet' element={<DSAComponent/>}/>
                <Route path='/dsa-problem/*' element={<Post/>}/>
                <Route path='/problems/*' element={<Practice/>}/>
                
            </Routes>
            </main>
            <Footer/>
        
        </AnimatePresence>
    );
};

export default App;