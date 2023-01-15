import {useCallback, useEffect, useRef} from "react";
import {Box, Typography} from "@mui/material";
import bg01 from "../../assets/bg01.jpeg";
import Typed from "typed.js";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {hexagon, links} from "../../constants/particles";

const Home = () => {
    const nameEl = useRef(null);
    const infoEl = useRef(null);

    const strings = [
        "I'm fullstack developer",
        "I'm C# programmer",
        "I'm server administrator"
    ];

    useEffect(() =>{
        const typedName = new Typed(nameEl.current, ({
            strings: ["Mostafa Saeidi Moein"],
            startDelay: 1500,
            typeSpeed: 80,
            backSpeed: 60,
            backDelay: 100,
            showCursor: false,
        }));

        const typedInfo = new Typed(infoEl.current, ({
            strings: strings,
            startDelay: 4000,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 100,
            loop: true,
            showCursor: false
        }));

        return () => {
            typedName.destroy();
            typedInfo.destroy();
        };
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(${bg01})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={links}
            />
            <Typography ref={nameEl} variant="h4" sx={{color: "whiteSmoke"}} />
            <Typography ref={infoEl} variant="h5" sx={{
                color: "whiteSmoke",
                textDecoration: "underline",
                textDecorationColor: "skyBlue"
            }} />
        </Box>
    );
};

export default Home;
