import Typewriter from "typewriter-effect";
function TypeAnimation(){
    return(
        <Typewriter
        options={{strings:[
            "Software Engineer",
            "FrontEnd Developer",
            "BackEnd Developer",
            "MERN Stack Developer"
        ],
    autoStart:true,
    loop: true,
    deleteSpeed: 60
    }}
    />
    )
}
export default TypeAnimation;