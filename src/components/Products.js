import CardsData from './CardsData'
import { useState } from "react"
import { Button, ButtonGroup, Card, Col, Container, Row, Nav, Spinner } from "react-bootstrap"
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
const Products = () => {
  const [data, setData] = useState(CardsData)
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch();

  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }

  // useEffect(() => {
  //   let componentMounted = true
  //   const getProducts = async () => {
  //     setLoading(true)
  //     const response = await fetch("https://fakestoreapi.com/products")
  //     if (componentMounted = true) {
  //       setData(await response.clone().json())
  //       setFilter(await response.json())
  //       setLoading(false)
  //       console.log(filter)
  //     }
  //     return () => {
  //       componentMounted = false
  //     }
  //   }
  //   getProducts()
  // }, [])

  const Loading = () => {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </>
    )
  }

  const filterProduct = (categories) => {
    const updatedList = data.filter((x) => x.category === categories)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        {/* <ButtonGroup className="d-flex mb-5 pb-5">
          <Button variant="outline-dark me-2" onClick={() => setFilter(data)}>All</Button>
          <Button variant="outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
          <Button variant="outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
        </ButtonGroup> */}
        {filter.map((Product,id) => {
          return (
            <>
                <Card style={{ width: '22rem',border:"none" }} className="mx-2 mt-4 card_style" key={id}>
                  <Card.Img variant="top" src={Product.imgdata} style={{height:"16rem"}} className="mt-3" key={id} />
                  <Card.Body>
                    <Card.Title className="mb-0">{Product.rname.substring(0, 12)}</Card.Title>
                    <Card.Text className="lead fw-bold">
                    Price : ₹ {Product.price}
                    </Card.Text>
                    <Button variant="primary"  
                      onClick={()=> send(Product)}
                     className='col-lg-12'>Add to Cart
                     </Button>
                  </Card.Body>
                </Card>
              
            </>
          )
        })}
      </>
    )
  }
  return (
    <Container className="my-5 py-5">
      <Row>
        <Col className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Menu Items</h1>
          <hr />
        </Col>
      </Row>
      <Row className="justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </Row>
    </Container>
  )
}

export default Products