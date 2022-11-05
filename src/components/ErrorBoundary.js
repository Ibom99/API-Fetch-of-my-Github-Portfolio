import React, { Component } from 'react'

class ErrorBoundary extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
      // change to true to show error boundary and back to false
        hasError: false
     }
   }

    static getDerivedStateFromError(){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
       console.log(error)
       console.log(info)
    }

  render() {
        if (this.state.hasError){
            return <h1>Something went wrong!</h1>
        }
      return this.props.children
  }
}

export default ErrorBoundary
