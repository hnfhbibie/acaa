import { Navbar, Footer } from "./components";
import { Hero, About, Memories, Playlist, Quest } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="py-20">
        <Hero />
      </section>
      <section className="py-20 px-10">
        <About />
      </section>
      <section className="py-20 px-10 border-t border-b">
        <Memories />
      </section>
      <section>
        <Playlist />
      </section>
      <section>
        <Quest />
      </section>
      <Footer />
    </main>
  );
};

export default App;
