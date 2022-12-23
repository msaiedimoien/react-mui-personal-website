import {cloneElement} from "react";
import {AppBar, Box, Button, Fab, Fade, ownerDocument, Toolbar, useScrollTrigger} from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

function ScrollTop(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            '#back-to-top-anchor',
        );

        if (anchor) {
            anchor.scrollIntoView({
                block: 'center',
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: 'fixed', bottom: 16, left: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
};

const Header = () => {
    return (
        <>
            <ElevationScroll>
                <AppBar>
                    <Toolbar>
                        <Button variant="primary">کلیک کن</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <ScrollTop>
                <Fab size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    )
};

export default Header;
