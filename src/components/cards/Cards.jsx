// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// const ImagePHATH = '../../public/images/';

const Cards = ({pharmacies}) => {
    return(
        pharmacies.map((item) => {
            return(
                <div className="my-4 mx-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.Title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{item.garde}</Card.Subtitle>
                            <Card.Text>
                                {item.Address}
                            </Card.Text>
                        </Card.Body>
                    </Card> 
                </div>
            )
        })
    )
}


export default Cards;