import logo from "../assets/logo.svg";

function About (prop){
    return(
        <aside>
            <img src ={logo} placeholder= "https://via.placeholder.com/215" alt ="blog logo"/>
            <p> {prop.about}</p>
        </aside>

    )
}
export default About