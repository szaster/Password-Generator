import "./App.css";

function App() {
  function handleStartClick() {
    alert("Start Button was clicked");
  }
  return (
    <div className="App">
      <h1 style={{ background: "pink" }}>
        Welcome! This application generates a random password based on the
        criteria provided by a user
      </h1>

      <button style={{ background: "lime" }} onClick={handleStartClick}>
        START
      </button>

      
    </div>
  );
}

export default App;
