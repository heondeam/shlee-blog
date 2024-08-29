import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

function Layout({ children }: LayoutProps) {
    return <div className="">{children}</div>;
}

export default Layout;
