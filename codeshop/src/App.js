import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { CreateItem, Header ,HomePageContainer,Home} from './components';
import {AnimatePresence} from 'framer-motion'


const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
        <div className='w-screen h-auto flex flex-col bg-gray-100'>
            <Header/>

            <main className='mt-14 md:mt-20 px-16 py-4 w-full'> 
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/createItem' element={<CreateItem/>}/>
            </Routes>
            </main>
        </div>
        </AnimatePresence>
    );
};

export default App;