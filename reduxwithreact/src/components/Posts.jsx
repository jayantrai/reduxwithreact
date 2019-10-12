import React, { Component } from 'react'
 class Posts extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          data: []
       }
     }

     componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/posts')
       .then(res => res.json())
       .then(data => this.setState({data}))
       
       
     }
     
     
     render() { 
         const fetchItems = this.state.data.map(d => (
             <div key={d.id}>
                <h2>{d.title}</h2>
             </div>
         ))
         return ( 
             <div>
                <h1>
                 Posts
                </h1>

                <div>
                    {fetchItems}
                
                </div>
                


             </div>
          );
     }
 }
  
 export default Posts;