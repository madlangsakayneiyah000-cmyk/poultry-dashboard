function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Poultry Farm Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
          <h3>Temperature</h3>
          <p>28.5 °C</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
          <h3>Humidity</h3>
          <p>72 %</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
          <h3>Ammonia</h3>
          <p>8 ppm</p>
        </div>

        <div style={{ border: "1px solid #ccc", padding: "15px", width: "200px" }}>
          <h3>Methane</h3>
          <p>1.4 ppm</p>
        </div>
      </div>

      <h2 style={{ marginTop: "30px" }}>Controls</h2>

      <button style={{ marginRight: "10px" }}>Fan ON</button>
      <button style={{ marginRight: "10px" }}>Lights ON</button>
      <button>🌊 Pressure Washer</button>
    </div>
  );
}

export default App;
