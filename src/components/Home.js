import { Card, Container } from "react-bootstrap"
import Products from "./Products"

const Home = () =>{
  return (
   <div className="hero">
     <Card className="bg-dark text-white border-0">
    <Card.Img src="bg.jpg" alt="Card image" />
    <Card.ImgOverlay className="d-flex flex-column justify-content-center">
        <Container>
        <Card.Title className="display-3 fw-bolder mb-0">SNACKS AND DRINKS</Card.Title>
      <Card.Text className="lead fs-2">
        CHECK OUT ALL THE ITEMS
      </Card.Text>
        </Container>
    </Card.ImgOverlay>
  </Card>
  <Products/>
   </div>
  )
}

export default Home