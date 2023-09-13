import "./App.css";

const famousPlace = "chhimkeshwori";
const inDistrict = "Gorkha Manakamana";
const mainContent = "Its me CHij from nepal.";
function App() {
  return (
    <div>
      <div className="sahas">
        <h1>{famousPlace}</h1>
      </div>

      <div className="sahas1">
        <h2>{inDistrict}</h2>
        <p>{mainContent}</p>
      </div>
    </div>
  );
}

export default App;
