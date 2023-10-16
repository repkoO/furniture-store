import './App.css'

function App() {

  return (
    <>
      <main>
        <section className="main__container">
          <div className="main__section">
            <div className="main__title">
              <h2>The furniture brand for the<br />future, with timeless designs</h2>
              <button><span>View Collection</span></button>
            </div>
            <div className="main__text">
              <p>A new era in eco friendly furniture with Avelon, the French luxury retail brand <br />
                with nice fonts, tasteful colors and a beautiful way to display things digitally <br />
                using modern web technologies.</p>
            </div>
          </div>
          <div className="main__img">
            <img src="./public/img/b01e6c4660bc72629bd073b338a795ca.jpeg" alt="" />
          </div>
        </section>
        <section className="different__container">
          <div className="diff__adv">
            <div className="diff_adv-title">
              <h3>What makes our brand different</h3>
            </div>
            <div className="diff__adv-sections">
              <div className="diff__advs">
                <img src="./public/icons/Delivery.png" alt="" />
                <h4>Next day as standard</h4>
                <p>Order before 3pm and get your order
                  the next day as standard</p>
              </div>
              <div className="diff__advs">
                <img src="./public/icons/Checkmark--outline.png" alt="" />
                <h4>Made by true artisans</h4>
                <p>Handmade crafted goods made with 
                  real passion and craftmanship</p>
              </div>
              <div className="diff__advs">
                <img src="./public/icons/Purchase.png" alt="" />
                <h4>Unbeatable prices</h4>
                <p>For our materials and quality you won’t find better prices anywhere</p>
              </div>
              <div className="diff__advs">
                <img src="./public/icons/Sprout.png`" alt="" />
                <h4>Recycled packaging</h4>
                <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App