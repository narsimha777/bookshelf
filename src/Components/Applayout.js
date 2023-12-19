import { NavLink, Outlet } from "react-router-dom";
import ROUTES from "../routes";

export default function Applayout() {
    return (
        <div>
            <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">BOOK-SHELF APP©️</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page"to={ROUTES.Admin()}>Admin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.showAdmin()}>showAdmin</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.showBook()}>showBook</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to={ROUTES.QRscanner()}>QRscanner</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet/>
            {/* <img src={image} style={{height:"300vh",width:"100%"}}/> */}
        </div>
    )
}