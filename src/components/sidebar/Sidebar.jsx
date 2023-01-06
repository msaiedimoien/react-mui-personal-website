import {useState} from "react";
import {SidebarContent} from "./";
import SidebarDrawer from "./drawer/SidebarDrawer";
import DrawerActionButton from "./drawer/DrawerActionButton";

const Sidebar = ({value, handleChange}) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <DrawerActionButton setOpenDrawer={setOpenDrawer} />

            <SidebarContent value={value} handleChange={handleChange}/>

            <SidebarDrawer value={value} handleChange={handleChange}
                           openDrawer={openDrawer} setOpenDrawer={setOpenDrawer()}
            />
        </>
    )
};

export default Sidebar;
