import { Col, Row } from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import storeItems from "../data/items.json"

export function Store() {
    return (
        <>
            <div className="card" style={{ padding: "2rem", margin: "0rem 0rem 1rem 0rem", textAlign: "center" }}>
                <h1>Store</h1>
            </div>
            <Row md={1} xs={1} lg={3} className="g-3">
                {storeItems.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}