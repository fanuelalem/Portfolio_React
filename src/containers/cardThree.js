import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

 const CardThree = () => (

  <div>
   <div className="card" style={{width: "18rem",height:'30rem',float:'left'}}>
  <img style={{padding:'10px',height:'12rem'}} src="https://specials-images.forbesimg.com/imageserve/5e6b2cd27d6f2600068f5a70/960x0.jpg?fit=scale" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Happy Travel</h5>
    <p className="card-text">   Happy Travel, an application that gives user information on local restaurants, events, and weather based on location!    
</p>
    <a style={{marginRight:'15px'}}href="https://erikvschultz.github.io/happytravel/" className="btn btn-primary">Live demo</a>
    <a href="https://github.com/erikvschultz/happytravel" className="btn btn-primary">Github</a>

  </div>
</div>
 </div>
  // <Card>
  //   <Image src='https://specials-images.forbesimg.com/imageserve/5e6b2cd27d6f2600068f5a70/960x0.jpg?fit=scale' wrapped ui={false} />
  //   <Card.Content>
  //     <Card.Header>Happy Travel </Card.Header>
  //     <Card.Meta>
  //       <span className='date'>Joined in 2015</span>
  //     </Card.Meta>
  //     <Card.Description>
      // Happy Travel, an application that gives user information on local restaurants, events, and weather based on location!    
  //       </Card.Description>
  //    </Card.Content>
  //   <Card.Content style={{float:'left'}} extra>
  //     <a href='https://erikvschultz.github.io/happytravel/'>
  //       <Icon name='user' />
  //       Live demo       </a>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href='https://github.com/erikvschulz/happytravel'>
  //       <Icon name='user' />
  //       Github       </a>
  //   </Card.Content>
  // </Card>
)

export default CardThree