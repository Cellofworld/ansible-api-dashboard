import Logo from "../logo/Logo"
import Notification from "../notification/Notification"
import SearchPosts from "../searchPosts/SearchPosts"
import "./header.css"

function Header() {
    return (
      <div className="headerPost">
        <div className="headerLogo">
          <Logo />
        </div>
        <div className="headerMenu">
          <div className="headerMenuItem">
            <SearchPosts />
          </div>
          <div className="headerMenuItem">
            <Notification />
          </div>
        </div>
      </div>
    )
  }
  
  export default Header