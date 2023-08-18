import './Header.css'
function Header ({darkmode, icon}) {
    return (
        <div className="header">
          <p className='title'>Where in the world</p>
          <div className='darkmode-container' onClick={darkmode}>
            {
                icon === 'dark' 
                ? <ion-icon className="darkmode-icon" name="moon"></ion-icon>
                : <ion-icon className="darkmode-icon" name="moon-outline"></ion-icon>
            }
            
            {/* <ion-icon name="moon"></ion-icon> */}
            <p>Dark Mode</p>
          </div>
        </div>
    )
}

export default Header;