import { Navbar, Hero, Promo, Footer } from './components'

function App() {
   return (
      <main className="App">
         <header>
            <Navbar />
         </header>
         <Hero />
         <Promo />
         <Footer />
      </main>
   );
}

export default App;
