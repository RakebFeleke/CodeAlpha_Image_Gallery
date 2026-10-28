import './App.css'
function Header() {
  return (
    <header>
      <h1>My Image Gallery</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#gallery">Gallery</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home">
      <h2>Explore the World Through Pictures</h2>
      <p>A collection of beautiful moments and places.</p>
    </section>
  );
}

function ImageCard({title,category,image}) {
  return (
    <article>
      <img
        src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500"
        alt="Beautiful landscape"
      />
      <h3>Beautiful Landscape</h3>
      <p>Nature</p>
    </article>
  );
}


function Gallery() {
  return (
    <section id="gallery">
      <h2>My Collection</h2>

     
<div className="gallery">
  <ImageCard
    title="Mountain Adventure"
    category="Nature"
    image="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500"
  />

  <ImageCard
    title="City Lights"
    category="Cities"
    image="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500"
  />

  <ImageCard
    title="Ocean Dreams"
    category="Travel"
    image="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500"
  />
</div>

    </section>
  );
}



function App() {
  return (
    <>
      <Header />
      <main>
        <Hero/>
        <Gallery/>
      </main>
    </>
  );
}

export default App;
