import { FC, PropsWithChildren, LinkHTMLAttributes } from "react";

export type LinkProps = PropsWithChildren<{

}> & LinkHTMLAttributes<HTMLLinkElement>;

const Link: FC<LinkProps> = ({ children = "", href = "#", className }) => {
    return (
        <a href={href} className={className}>
            {children}
        </a>
    );
};
export default Link;