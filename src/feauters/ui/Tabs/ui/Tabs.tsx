import { useEffect, useMemo, useState } from "react";
import cnBind from "classnames/bind";

import svgPath from "../../../../shared/assets/icons/sprite.svg";
import { Button } from "../../../../shared/ui/Button/Button";
import { ButtonIcon } from "../../../../shared/ui/ButtonIcon/ButtonIcon";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const Tabs = ({
    isMobile,
    listTabs = [],
    tabsType,
    handleChangeTab,
}: {
    isMobile: boolean;
    listTabs?: string[];
    tabsType: string;
    handleChangeTab: (type: string) => void;
}) => {
    const [isActiveTab, setIsActiveTab] = useState<string>("");
    const tabs: string[] = ["All", "Ongoing", "Completed"];
    const handleAction = (type: string) => {
        handleChangeTab(type);
    };
    const tabClass = isMobile ? "tabs-mobile__tab" : "tabs__tab";
    const arrTabs = useMemo(() => (listTabs.length ? listTabs : tabs), [listTabs]);
    useEffect(() => {
        setIsActiveTab(tabsType);
    }, [tabsType]);

    return (
        <div className={cx("tabs", isMobile && "tabs-mobile")}>
            {arrTabs.map((icon, i) =>
                isMobile ? (
                    <Button
                        key={i}
                        className={cx(tabClass, isMobile && isActiveTab === arrTabs[i] && "tabs-mobile__tab_active")}
                        handleClick={() => handleAction(icon)}
                    >
                        {icon}
                    </Button>
                ) : (
                    <ButtonIcon
                        key={i}
                        classPrefix={cx(tabClass, !isMobile && isActiveTab === arrTabs[i] && "tabs__tab_active")}
                        handleAction={() => handleAction(icon)}
                        classPrefixIcon={cx("bg", icon === tabsType ? "tab__bg" : "")}
                        path={!isMobile ? svgPath : ""}
                        nameIcon={!isMobile ? icon : ""}
                        classIconSize="medium"
                    />
                ),
            )}
        </div>
    );
};
