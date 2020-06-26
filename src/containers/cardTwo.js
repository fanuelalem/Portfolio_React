 import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

 const CardTwo = () => (
  <div>
  <div className="card" style={{width: "18rem",height:'30rem',float:'left'}}>
 <img style={{padding:'10px',height:'12rem'}}src="https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/c6bzg9yhvanwaycqqhv8.jpg" class="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title">The Jedi Code</h5>
   <p className="card-text">      A full stack quiz application that takes user results and will determine if they are in the Jedi category or the Sith category.
</p>
   <a href="https://fanuelproject2.herokuapp.com/" className="btn btn-primary" style={{marginRight:'15px'}}>Live demo</a>
   <a href="https://github.com/Vavarooks/Project-02" className="btn btn-primary ">Github</a>

 </div>
</div>
</div>
  // <Card>
  //   <Image src='https://res.cloudinary.com/jerrick/image/upload/fl_progressive,q_auto,w_1024/c6bzg9yhvanwaycqqhv8.jpg' wrapped ui={false} />
  //   <Card.Content>
  //     <Card.Header>jedi code </Card.Header>
  //     <Card.Meta>
  //       <span className='date'>Joined in 2015</span>
  //     </Card.Meta>
  //     <Card.Description>
      // A full stack quiz application that takes user results and will determine if they are in the Jedi category or the Sith category.
  //     </Card.Description>
  //    </Card.Content>
  //   <Card.Content style={{float:'left'}} extra>
  //     <a href='https://fanuelproject2.herokuapp.com/'>
  //       <Icon name='user' />
  //       Live demo       </a>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href='https://github.com/Vavarooks/Project-02'>
  //       <Icon name='user' />
  //       Github       </a>
  //   </Card.Content>
  // </Card>
)

export default CardTwo