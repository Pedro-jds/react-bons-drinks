
import './App.css';

const a = "hello"
const b = "world"
function App() {
  return (
    <div className="App">
      <header style={{ color: "red" }}>Titulo</header>
      <form style={{ display: 'flex', flexDirection: 'column', alignContent: "center" }}>
        <input style={{ width: '500px' }} type="text" placeholder={a} />
        <input style={{ width: '500px' }} type="text" placeholder={b} />
        <button style={{ width: '500px' }} type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
