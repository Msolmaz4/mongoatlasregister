
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Cards = ({title,price,foto,des,say,eks}) => {
   
 




  return (
  
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title> {title} </Card.Title>
        <Card.Text>
        {des}
        </Card.Text>
        <Card.Text> {price} $</Card.Text>
        <Button variant="primary" onClick={eks} >cikar</Button>
        <Button variant="primary"  onClick={say}>ekle</Button>
      </Card.Body>
    </Card>
  );
    


    




    
    
   
  


}

export default Cards