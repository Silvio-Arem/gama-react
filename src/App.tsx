import Header from "./components/Header";
import Box from "./components/Box";
import "./styles/global.css"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Box background="claro">
          <h1> Educação Financeira é tudo de bom</h1>
          </Box>
        <Box background="escuro">
        <h1> Educação Financeira é tudo de bom</h1>
        </Box>
      </main>
    </div>
  );
}

export default App;
