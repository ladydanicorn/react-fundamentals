import { Container, Row, Col, Button, Card, Image, Nav } from 'react-bootstrap';

// Task 1: Header Component with React-Bootstrap
function Header() {
  return (
    <header className="position-relative text-center mb-4" style={{ backgroundColor: "#343a40", padding: "2rem" }}>
      <Container>
        <Image 
          src="https://fhd.multiurok.ru/f/e/b/feb32de45787b7032e4d4595fa094192f79fa290/img1.jpg" 
          alt="221B Baker Street" 
          fluid 
          className="w-100 rounded shadow"
        />
        <Card className="mt-3 border shadow-sm p-4 text-center bg-light">
          <Card.Body>
            <h1 className="text-dark">Sherlock Holmes</h1>
            <Button variant="primary" className="shadow-lg border border-dark">Shop Now</Button>
          </Card.Body>
        </Card>
      </Container>
    </header>
  );
}


// Task 2: About Component with React-Bootstrap
function About() {
  return (
    <Container className="my-4">
      <Card className="border shadow-sm">
        <Card.Body>
          <Card.Title>About Me</Card.Title>
          <Card.Text>
            Consulting detective based in London at 221B Baker Street. 
            Specializing in solving seemingly impossible cases through 
            the science of deduction.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

// Task 3: Contact Component with React-Bootstrap
function Contact() {
  return (
    <Container className="my-4">
      <Card className="border shadow-sm">
        <Card.Body>
          <Card.Title>Contact Information</Card.Title>
          <Card.Text>
            <p>Address: 221B Baker Street, London, England</p>
            <p>Email: sherlock.holmes@consulting-detective.com</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

// Task 4: NotFound Component with React-Bootstrap
function NotFound() {
  return (
    <Container className="text-center my-5 p-4" style={{ backgroundColor: "#f8d7da", borderRadius: "8px" }}>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="border shadow-lg">
            <Card.Body>
              <Card.Title className="text-danger">404 - Page Not Found</Card.Title>
              <Image 
                src="https://cdn.theatlantic.com/thumbor/Y83wvG-xiQcndvgO5OS4157t1ZU=/0x0:2362x2952/1330x1663/media/img/2025/01/06/SherlockHolmes_Atlantic_1/original.jpg" 
                alt="Sherlock Holmes" 
                fluid 
                className="my-4 rounded shadow"
                style={{ maxHeight: '300px' }}
              />
              <Card.Text>
                Even Sherlock Holmes couldn't find this page!
              </Card.Text>
              <Button variant="primary" as={Nav.Link} href="/">
                Return to Homepage
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}


// App Component
function App() {
  return (
    <Container fluid className="p-0">
      <Header />
      <About />
      <Contact />
    </Container>
  );
}

export default App;