
import './App.css';
import Info from "./comp/info"
import Main from "./comp/main"
import Theme from "./comp/theme"

export default function App () {
    return (
        <div className="container" id="dark">
            <Info />
            <Main />
            <Theme />
        </div>
    )  
}