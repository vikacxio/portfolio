import Typewriter from "typewriter-effect";
function TypeAnimation() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineer.",
                    "Front End Developer.",
                    "Back End Developer.",
                    "Cloud Engineer."
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 60
            }}
        />
    )
}
export default TypeAnimation;