function App() {
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  console.log(serverUrl);

  return (
    <div className="app">
      <h1>Live Collaborative Whiteboard</h1>
    </div>
  );
}

export default App;