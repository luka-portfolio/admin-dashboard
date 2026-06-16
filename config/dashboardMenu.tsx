import {
    UserOutlined,
    UploadOutlined,
    SettingOutlined,
    DashboardOutlined,
    LogoutOutlined,
    PictureOutlined,
    FolderOpenOutlined,
} from "@ant-design/icons";

import type { MenuProps } from "antd";

type MenuItem = MenuProps["items"][number];

export const dashboardMenu: MenuItem[] = [
// export const dashboardMenu = [
    {
        key: "/dashboard",
        icon: <DashboardOutlined />,
        label: "Dashboard", 
    },
    {
        key: "/dashboard/products",
        icon: <UserOutlined />,
        label: "products",
    },
    {
        key: "images",
        icon: <FolderOpenOutlined />,
        label: "Images",
        children: [
            {
                key: "/dashboard/banners",
                icon: <PictureOutlined />,
                label: "Banners",
            },
        ],
    },
    {
        key: "/dashboard/uploads",
        icon: <UploadOutlined />,
        label: "Uploads",
    },
    {
        key: "/dashboard/settings",
        icon: <SettingOutlined />,
        label: "Settings",
    },
    {
    type: "divider",
    // key: "divider-1",
    },
    {
        key: "logout",
        icon: <LogoutOutlined />,
        label: "Logout",
        danger: true,
    },
];