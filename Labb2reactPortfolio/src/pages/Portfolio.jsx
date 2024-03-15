import { useState, useEffect } from "react";
import GitHubDemo from "../data/GitHubDemo";

function Portfolio() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000); 

        return () => clearTimeout(timeout);
    }, []);

    return(
        <section className="standardsection">
            {loading ? (<section className="spinnersection">
                <div className="spinner"></div>
                </section>
            ) : (
                <div className="projects">
                    <GitHubDemo/>    
                </div>
            )}
        </section>
    );
}

export default Portfolio;