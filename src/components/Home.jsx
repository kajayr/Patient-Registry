import './styles/home.css'
export const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6 bg-dark bg-gradient mainCol">
                <h1 className="text-center">Patient Registry</h1>
                <p className="text-center">Welcome to the Patient Registry application page. This is a non-comercial website and the only purpose is representing the project</p>

                <h3>Team members</h3>
                <ul>
                    <li>Alpha</li>
                    <li>James</li>
                    <li>Leo Sinani</li>
                </ul>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}