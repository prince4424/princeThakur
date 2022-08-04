import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import images from './images/cardimg.jpg'


function Avtar(){ 
  return (
    <Card style={{ width: '18rem'  ,   background: 'transparent',
    border: 0}}>
      <Card.Img variant="top" className='cardimg'  src={images}  />
      <Card.Body>
        <Card.Title>Hi i'm Prince</Card.Title>
        <Card.Text>
         FRONTEND DEVLOPER
        </Card.Text>
        <Button variant="primary">Resume</Button>
      </Card.Body>
    </Card>
  );
}

export default Avtar;
