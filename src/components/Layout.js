import Footer from "./Footer"
import Nav from "./Nav"

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className="container">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout