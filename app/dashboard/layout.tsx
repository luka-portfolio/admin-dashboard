"use client";

import React, { useState } from "react";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MoonOutlined,
    SunOutlined,
    UserOutlined,
} from "@ant-design/icons";

import { Button, Layout, Menu, theme, Switch, Avatar } from "antd";
import { useTheme } from "@/providers/AntdThemeProvider";
import { usePathname, useRouter } from "next/navigation";
import { dashboardMenu } from "@/config/dashboardMenu";

const { Header, Sider, Content } = Layout;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

    const { mode, toggleTheme } = useTheme();

    const handleLogout = () => {

  localStorage.removeItem("token");

  router.push("/");
};
  

  return (
    <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div
                style={{
                    height: 32,
                    margin: 16,
                    background: "grey",
                }}
            />

            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname]}
                items={dashboardMenu}
                  onClick={({ key }) => {
                    if (key === "logout") {
                    handleLogout();
                    } else if (!key.includes("divider")) {
                    router.push(key);
                    }
                }}
            />
        </Sider>

        <Layout>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 16,
                    paddingRight: 16,
                }}
            >
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: 16,
                        width: 64,
                        height: 64,
                    }}
                />
                <div className="flex items-center justify-between gap-3">
                    <Switch
                        checked={mode === 'dark'}
                        onChange={toggleTheme}
                        checkedChildren={<MoonOutlined />}
                        unCheckedChildren={<SunOutlined />}
                    />

                    <Avatar icon={<UserOutlined />} />
                </div>
            </Header>

            <Content
                style={{
                    margin: "24px 16px",
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                }}
            >
                {children}
            </Content>
        </Layout>
    </Layout>
    );
}