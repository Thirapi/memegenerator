import logo from '/assets/troll-face.png'

function Header() {
    return (
      <header className='header'>
        <img className='header--logo' src={logo} alt='logo'/>
        <h2 className='header--logo--item'>Meme Generator</h2>
        <p className='header--item'>React Course - Project 3</p>
      </header>
    )
  }

  export default Header;