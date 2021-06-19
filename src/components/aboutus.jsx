import './styles/home.css'
export const AboutUs = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6 bg-dark bg-gradient mainCol">
                <h1>Team members</h1>
                <hr />
                <ul>
                    <li>Alpha - <a href="https://github.com/alpha1256" target="_blank" rel="noreferrer">github.com/alpha1256</a></li>
                    <li>James Falk - <a href="https://github.com/james-falk" target="_blank" rel="noreferrer">github.com/james-falk</a></li>
                    <li>Leo Sinani - <a href="https://github.com/kajayr/" target="_blank" rel="noreferrer">github.com/kajayr/</a></li>
                </ul>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}