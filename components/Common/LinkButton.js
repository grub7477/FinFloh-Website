import Link from "next/link";
import { Theme } from "../../utils/constants";

export const LinkBtnType = {
    PRIMARY:"primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary"
}

const classNameMap = {
    [LinkBtnType.PRIMARY]:{
        [Theme.DARK]: "link_btn",
        [Theme.LIGHT]: "link_btn"
    },
    [LinkBtnType.SECONDARY]:{
        [Theme.DARK]: "btn_outline btn_outline_dark",
        [Theme.LIGHT]: "btn_outline btn_outline_dark"
    }
}

const LinkButton = ({
    href,
    disableArrow=false,
    type = LinkBtnType.PRIMARY,
    theme,
    openInNewTab,
    children,
    style,
    ...restProps
}) => {
    const className = classNameMap[type][theme] ||"link_btn";

    return (
        <Link href={href}>
        <a className={className} target={openInNewTab ? "_blank":"_self"} style={style} {...restProps}>
            {/* {children} {!disableArrow && <img src="/images/blackuparrow.svg" />} */}
                {children}
                {/* // blackArrrow and whiteArrow conditionally rendered */}
                {!disableArrow && (
                    <img 
                        src={theme === Theme.DARK ? "/images/blackuparrow.svg" : "/images/whiteuparrow.svg"}
                        alt={theme === Theme.DARK ? "Black up arrow icon FinFloh" : "White upward arrow icon FinFloh"}
                    />
                )}
        </a>
        </Link>
    );
};

export default LinkButton;