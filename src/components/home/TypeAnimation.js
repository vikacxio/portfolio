import Typewriter from "typewriter-effect";
function TypeAnimation() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Engineer.",
                    "Front-end Developer.",
                    "Back-end Developer.",
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