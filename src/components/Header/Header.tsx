import { FC, PropsWithChildren } from "react";
import "./Header.scss";

export type HeaderProps = PropsWithChildren<{

}>

const Header: FC<HeaderProps> = ({ children = "" }) => {
    return (
        <header className="main-header">
            {children}
        </header>
    );
};
export default Header;