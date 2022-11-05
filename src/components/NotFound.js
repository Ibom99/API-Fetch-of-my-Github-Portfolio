import './NotFound.css'
import Navigation from './Navigation'

export default function NotFound(){ 
    return(
      
      <div className="errorpage">
        <Navigation />
        <div className='error'>
        <h1 className='header'>404 Error</h1>
        <h2>Page Not Found</h2>
        <p className="errorDetails">Oops!! you seem to be lost...<br /> Click on Home Page to go back!</p>
        </div>
        </div>
    )}