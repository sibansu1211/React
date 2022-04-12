import './App.css';

const LandingPage = () =>{
    return(
        <div className="LandingPage">
            <span className="img-container">
                <img src="./images/img2.jpg" alt="CoverImage"/>
            </span>
            <span className="text-container">
                <span className="text">
                    <h1>
                        Solace in Nature
                        <button>
                            <a href="http://localhost:3000/">
                                Enter
                            </a>
                        </button>
                    </h1>
                </span>       
            </span>
        </div>
    )
}
export default LandingPage;