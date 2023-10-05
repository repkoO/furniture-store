import './Header.css'

export default function Header() {
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__title">
          <div className="search__button">
            <img src="public/icons/Search.png" alt="Search" />
          </div>
          <div className="title">
            <h1>Avion</h1>
          </div>
          <div className="card__profile">
            <img src="public/icons/Shopping--cart.png" alt="Shopping cart" />
            <img src="public/icons/User--avatar.png" alt="User avatar" />
          </div>
        </div>
        <div className="border"></div>
          <nav className="header__nav">
            <a href="">Plant pots</a>
            <a href="">Ceramics</a>
            <a href="">Tables</a>
            <a href="">Chairs</a>
            <a href="">Crockery</a>
            <a href="">Tableware</a>
            <a href="">Cutlery</a>
          </nav>
      </div>
    </header>
  )
}

