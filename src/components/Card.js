import React from 'react';
import Image from '../assets/blank_image.png';
import { Card, Button, ListGroup } from 'react-bootstrap';


const cardComponent = (props) => {
    if (!props.data.hasOwnProperty("title")) {
         props.data.title = props.data.name
      }
    return(
        <div>
            <Card style={{ width: '18rem', flex: 1, margin: 20 }}>
                <Card.Header style={{background: 'rgb(169, 169, 169)', minHeight: 150 }}><center>{props.data.title}</center></Card.Header>
                <Card.Img  style={{ padding: 10 }} alt="Card image" src={`${!props.data.urlToImage ? 
                    Image : 
                    props.data.urlToImage}`} />
                <hr />
                <Card.Body style={{ minHeight: 100, overflow: "scroll" }}>
                    <Card.Text>
                        {!props.data.description ? "Content Not Given" : props.data.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>From: {!props.data.author ? "Name Not Given" : props.data.author}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={() => window.open(`${props.data.url}`, "_blank")}>Read More</Button>
                <Card.Footer className="text-muted"><center>{props.data.publishedAt}</center></Card.Footer>
            </Card>
        </div>
    )
}

export default cardComponent;