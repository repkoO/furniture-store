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
                <img src="/icons/Delivery.png" alt="" />
                <h4>Next day as standard</h4>
                <p>Order before 3pm and get your order
                  the next day as standard</p>
              </div>
              <div className="diff__advs">
                <img src="/icons/Checkmark--outline.png" alt="" />
                <h4>Made by true artisans</h4>
                <p>Handmade crafted goods made with 
                  real passion and craftmanship</p>
              </div>
              <div className="diff__advs">
                <img src="/icons/Purchase.png" alt="" />
                <h4>Unbeatable prices</h4>
                <p>For our materials and quality you won’t find better prices anywhere</p>
              </div>
              <div className="diff__advs">
                <img src="/icons/Sprout.png" alt="" />
                <h4>Recycled packaging</h4>
                <p>We use 100% recycled packaging to ensure our footprint is manageable</p>
              </div>
            </div>
          </div>
        </section>
        <section className='listings__contaier'>
          <h3>New ceramics</h3>
          <div className="listings__items">
            <div className="listings__item">
              <img src="/img/Photo.png" alt="" />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="listings__item">
              <img src="/img/Photo-2.png" alt="" />
              <p>Rustic Vase Set</p>
              <p>£155</p>
            </div>
            <div className="listings__item">
              <img src="/img/Photo-3.png" alt="" />
              <p>The Silky Vase</p>
              <p>£125</p>
            </div>
            <div className="listings__item">
              <img src="/img/Parent.png" alt="" />
              <p>The Lucy Lamp</p>
              <p>£399</p>
            </div>
          </div>
          <button className='listings__button'>View Collection</button>
        </section>
        <section className='products__container'>
          <h3>Our popular products</h3>
          <div className="products__items">
            <div className="products__item">
              <img src="/img/Large.png" alt="" />
              <p>The Poplar suede sofa</p>
              <p>£980</p>
            </div>
            <div className="products__item">
              <img src="/img/chair-1.png" alt="" />
              <p>The Dandy chair</p>
              <p>£250</p>
            </div>
            <div className="products__item">
              <img src="/img/chair-2.png" alt="" />
              <p>The Chair Dandy</p>
              <p>£520</p>
            </div>
          </div>
          <button className='products__button'>View Collection</button>
        </section>
        <section className='email__container'>
          <div className="email__wrapper">
            <div className="email__item">
              <div className="email__title">
                <h1>Join the club and get the benefits</h1>
                <p>Sign up for our newsletter and receive exclusive offers on new <br />ranges, 
                  sales, pop up stores and more</p>
              </div>
                <div className="email__input">
                  <input className='emails__input' type="text" placeholder='your@email.com'/><button>Sing Up</button>
                </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App