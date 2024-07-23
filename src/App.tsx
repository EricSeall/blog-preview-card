import "./App.css";

function App() {
  return (
    <>
      <div className="card">
        <img
          className="preview-image"
          src="images/illustration-article.svg"
          alt="Preview Image"
        />
        <div className="text-content">
          <div className="tag">Learning</div>
          <h2>Published 21 Dec 2023</h2>
          <h1>HTML & CSS foundations</h1>
          <p className="description">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="footer">
            <img
              className="profile-image"
              src="images/image-avatar.webp"
              alt="Profile Image"
            />
            <p className="author">Greg Hooper</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
