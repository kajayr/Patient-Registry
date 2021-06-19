import './styles/home.css'
export const Home = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6 bg-dark bg-gradient mainCol">
                <h1 className="text-center">Patient Registry</h1>
                <hr />
                <p className="text-center">Welcome to the Patient Registry application page. This is a non-comercial website and the only purpose is representing the project</p>
                 <p className="text-center">
                     The application is able to add, update and delete the patient data using JPA technology connected to SQL database. 
                 </p>
                </div>
                <div className="col-3">

                </div>
            </div>
        </div>
    )
}