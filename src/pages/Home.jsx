function Home() {
  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold display-3 mb-2">Welcome to</h1>
      <h2 className="fw-bold display-2 mb-3 text-success">Odyssey AI Travels</h2>
      <p className="lead mb-4">Discover amazing destinations and plan your perfect trip with us!</p>
      <div className="d-flex justify-content-center gap-3 mb-5">
        <button className="btn btn-dark btn-lg px-4">Reserve Now <span className="ms-2">&rarr;</span></button>
        <button className="btn btn-outline-dark btn-lg px-4">Find Destinations</button>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="d-flex justify-content-center mt-4">
              <span className="bg-white rounded-circle  shadow p-3 d-flex align-items-center justify-content-center" style={{width: "64px", height: "64px"}}>
                <i className="bi bi-sun-fill fs-2 text-warning"></i>
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Beach Destinations</h5>
              <p className="card-text">Relax on pristine beaches with crystal clear waters.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="d-flex justify-content-center mt-4">
              <span className="bg-white rounded-circle  shadow p-3 d-flex align-items-center justify-content-center" style={{width: "64px", height: "64px"}}>
                <i className="bi bi-tree-fill fs-2 text-success"></i>
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">Mountain Adventures</h5>
              <p className="card-text">Explore stunning mountain ranges and hiking trails.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="d-flex justify-content-center mt-4">
              <span className="bg-white rounded-circle  shadow p-3 d-flex align-items-center justify-content-center" style={{width: "64px", height: "64px"}}>
                <i className="bi bi-buildings-fill fs-2 text-info"></i>
              </span>
            </div>
            <div className="card-body">
              <h5 className="card-title fw-bold">City Tours</h5>
              <p className="card-text">Experience vibrant cultures in amazing cities around the world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home