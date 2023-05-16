import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div class="card-footer text-muted">2 days ago</div>
      </div>
      <div class="card">
        <div class="row g-0">
          <div class="col-5 col-sm-4">
            <img
              src="assets/images/bs-images/img-3x4.png"
              class="img-fluid w-100"
              alt="card-horizontal-image"
            />
          </div>
          <div class="col-7 col-sm-8">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
