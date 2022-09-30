import Header from "@components/Header";
import Main from "@components/Main";
import Footer from "@components/Footer";
import "./App.scss";
import "@components/Main/Main.scss";

function App() {
    return (
        <div className="App">
            <Header>
                Main Header
            </Header>
            <Main />
            <Footer>
                Main Footer
            </Footer>
        </div>
    );
}

export default App;
