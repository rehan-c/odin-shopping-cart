export function About() {
    return (
        <div className="card" style={{padding: "2rem 0rem 3rem 0rem"}}>
            <h1 style={{ textAlign: "center", padding: "0rem 0rem 1rem 0rem" }}>About</h1>
            <div className="card" style={{ width: "50vw", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
                <img src="../../public/imgs/about.jpg" className="card-img-top" alt="car" style={{ width: "60%", height: "60%", marginLeft:"auto", marginRight:"auto", marginTop: "1rem", borderRadius: "10px" }}></img>
                <div className="card-body" style={{ marginLeft: "auto", marginRight: "auto"}}>
                    <h5 className="card-title">We provide great value offers on used vehicles.</h5>
                    <p className="card-text">Browse our latest used vehicle offerings on the Store tab.</p>
                </div>
            </div>
        </div>
    )
}