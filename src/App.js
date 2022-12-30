import {Toolbar} from "@mui/material";
import {MainLayout} from "./components/layouts/MainLayout";
import Sidebar from "./components/Sidebar";
import ContentContainer from "./components/ContentContainer";
import {useState} from "react";

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <MainLayout>
                <Sidebar value={value} handleChange={handleChange}/>
                <ContentContainer/>
            </MainLayout>
            <Toolbar id="back-to-top-anchor"/>
        </>
    );
};

export default App;
