import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { CreateItem, Header ,HomePageContainer,Home,PaidCourses} from './components';
import {AnimatePresence} from 'framer-motion'
import { Ds,Ml} from './components/courses';


const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-gray-100'>
            <Header/>

            <main className='mt-14 md:mt-20 px-5 py-4 w-full'> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/createItem' element={<CreateItem/>}/>
                <Route path='/ml' element={<Ml/>}/>
                <Route path='/paidcourse' element={<PaidCourses/>}/>
            </Routes>
            </main>
        </div>
        </AnimatePresence>
    );
};

export default App;