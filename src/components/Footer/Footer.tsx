import { FC, PropsWithChildren } from "react";
import "./Footer.scss";

export type FooterProps = PropsWithChildren<{

}>;

const Footer: FC<FooterProps> = ({ children = "" }) => {
    return (
        <footer className="main-footer">
            {children}
        </footer>
    );
};
export default Footer;