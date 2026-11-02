import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;