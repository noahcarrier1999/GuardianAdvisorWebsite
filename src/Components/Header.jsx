import logo from "../assets/Small Horizontal Logo No Background.png"
import "../styles/Header.css"

function Header(){
    return(
        <>
            <div className="header">
                <img src={logo} alt="logo" className="logo"/>
            </div>
        </>
        
    )
    
}

export default Header