import React from 'react'
import './Card1.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jean from './jeans.jpg'
import shirt from './shirts.jpg'
import sweater from './sweater.jpg'
import jacket from './Jackets.jpg'
import short from './Shorts.jpg'
import accessories from './accessories.jpg'
import big from './big.jpg'
import pant from './Pants.jpg'

const Card1 = () => {
  return (
    <>
      <p style={{textAlign:`center`}}>Clothing/Men</p>
      <h5 style={{textAlign:`center` , fontWeight:`bolder`}}>MEN'S CLOTHES</h5>
      
      <div className='card-layout'>
      
        <div className='card-container '>
        
        <div>
        <Card style={{border:`none`}}>
      <Card.Img variant="top" src={jean}  style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Jeans</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={pant}  style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Pants & Chinos</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={short} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Shorts</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card 
>
      <Card.Img variant="top" src={jacket} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Jean Jacket</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={sweater} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Sweatshirts </Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={shirt} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Shirts</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={big} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Big & Tall</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card >
      <Card.Img variant="top" src={accessories} style={{ width: '230px', height: '230px' }} />
      <Card.Body>
        <Card.Title>Accesorries</Card.Title>
       
      </Card.Body>
    </Card>
        </div>
</div>

        </div>
      
    </>
  )
}

export default Card1
