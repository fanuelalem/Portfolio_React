import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

 const CardOne = () => (
  // <Card>
  //   <Image src='https://image.shutterstock.com/z/stock-photo--d-finance-stock-market-stock-exchange-273602777.jpg' wrapped ui={false} />
  //   <Card.Content>
  //     <Card.Header>10/10 stock tracker</Card.Header>
  //     <Card.Meta>
  //       <span className='date'>Joined in 2015</span>
  //     </Card.Meta>
  //     <Card.Description>
      // A full stack application with authentication that allows a user to look up any stock help manage current stocks by tracking the latest winners and losers of the day and saving it onto a watchlist.      </Card.Description>
  //   </Card.Content>
  //   <Card.Content style={{float:'left'}} extra>
  //     <a href='https://stormy-refuge-75970.herokuapp.com/'>
  //       <Icon name='user' />
  //       Live demo       </a>
  //   </Card.Content>
  //   <Card.Content extra>
  //     <a href='https://github.com/Vavarooks/Project-3'>
  //       <Icon name='user' />
  //       Github       </a>
  //   </Card.Content>
  // </Card>
 <div>
   <div className="card" style={{width: "18rem",height:'30rem'}} >
  <img style={{padding:'10px',height:'12rem'}} src="https://image.shutterstock.com/z/stock-photo--d-finance-stock-market-stock-exchange-273602777.jpg" class="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">10/10 stock tracker</h5>
    <p className="card-text">      A full stack application with authentication that allows a user to look up any stock help manage current stocks by tracking the latest winners and losers of the day and saving it onto a watchlist.
</p>
    <a style={{marginRight:'15px'}}href="https://stormy-refuge-75970.herokuapp.com/" className="btn btn-primary">Live Demo</a>
    <a href="https://github.com/Vavarooks/Project-3" className="btn btn-primary">Github</a>

  </div>
</div>
 </div>
)




export default CardOne