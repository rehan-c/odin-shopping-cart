import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                    Home
                </Nav.Link>
                <Nav.Link to="/store" as={NavLink}>
                    Store
                </Nav.Link>
                <Nav.Link to="/about" as={NavLink}>
                    About
                </Nav.Link>
            </Nav>
            <Button
            onClick={openCart}
            style={{width: "3rem", height: "3rem", position: "relative", backgroundColor: "white"}}
            variant="outline-dark" 
            className="rounded-circle"
            >
                <img src="https://raw.githubusercontent.com/rehan-c/odin-shopping-cart/6afc88762a971a78b057a63cb9ec73e48f125b0f/src/components/cart.svg"></img>
                <div className="rounded-circle bg-danger d-flex justify-content-center 
                align-items-center"
                style={{color: "white", 
                width: "1.5rem", 
                height: "1.5rem", 
                position: "absolute", 
                bottom: 0, 
                right: 0, 
                transform: "translate(25%, 25%)"}}
                >
                    {cartQuantity}
                    </div>
            </Button>
        </Container>
    </NavbarBs>
}