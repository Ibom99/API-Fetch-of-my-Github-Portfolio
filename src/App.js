import React from 'react';
import { Routes, Route } from "react-router-dom";
import RepositoryList from './Routes/RepositoryList';
import RepositoryDetails from './Routes/RepositoryDetails'
import Repository from './Routes/Repository';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
// import TestError from './components/TestError';

function Home(){
  return(
    <div className='home-container'>
      <Navigation />
      <h1 className='home-title'>Welcome</h1>
      <p className='home-description'>...to my GitHub Repositories!</p>
    </div>
  )
}

function App(){
return(
  <section className='main-container'> 
   <ErrorBoundary>   
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/repositoryList' element={<Repository />} >
    <Route index element={<RepositoryList />} />
    <Route path={`repositoryDetails/:name`} element={<RepositoryDetails />} />
    </Route>
    {/* <Route path="/testError" element={<TestError />} /> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
  </ErrorBoundary>
  </section>
)
  
}
export default App;