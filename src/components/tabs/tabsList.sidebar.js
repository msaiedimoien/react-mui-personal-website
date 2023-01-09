import {
    HomeOutlined,
    MiscellaneousServicesOutlined, PermContactCalendarOutlined,
    PersonOutlineOutlined,
    RecommendOutlined,
    SummarizeOutlined
} from "@mui/icons-material";

const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

export const tabsList =() => {
    const tabs = [
        {label: "Home", icon: <HomeOutlined/>, ...tabProps(0)},
        {label: "About", icon: <PersonOutlineOutlined/>, ...tabProps(1)},
        {label: "Resume", icon: <SummarizeOutlined/>, ...tabProps(2)},
        {label: "Portfolio", icon: <RecommendOutlined/>, ...tabProps(3)},
        {label: "Services", icon: <MiscellaneousServicesOutlined/>, ...tabProps(4)},
        {label: "Contact", icon: <PermContactCalendarOutlined/>, ...tabProps(5)},
    ];

    return tabs;
};

