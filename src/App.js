import { About, Footer, Header, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
  return (
    <main className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />

      <Footer />
    </main>
  );
}

export default App;

