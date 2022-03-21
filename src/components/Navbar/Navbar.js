import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Developers
                </a>
                <a className="navbar-brand" href="#">
                    <img width='50px' src="https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681" alt="" />


                </a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto me-5 mb-5 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <img width='50px' src="https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?size=626&ext=jpg&uid=R64903934&ga=GA1.2.270866342.1647831681" alt="" />
                            </a>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;