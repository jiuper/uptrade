import { lazy, Suspense } from "react";
import cnBind from "classnames/bind";

import { Tabs } from "../../../feauters/ui/Tabs/ui/Tabs";
import { TabsMobile } from "../../../feauters/ui/TabsMobile/TabsMobile";
import { useHookDispatch, useHookSelector } from "../../../shared/lib/module/store/configStore";
import { TabsActionTypes } from "../../../shared/type/tabs.type";

import { HeaderToolsLeft } from "./HeaderToolsLeft/ui/HeaderToolsLeft";

import styles from "./style.module.scss";

const HTR = lazy(() =>
    import("./HeaderToolsRight/ui/HeaderToolsRight").then(({ HeaderToolsRight }) => ({ default: HeaderToolsRight })),
);

const cx = cnBind.bind(styles);

export const Header = ({ title }: { title: string }) => {
    const isMobile = useHookSelector((state) => state.width.isMobile);
    const tabsType = useHookSelector((state) => state.tabs.tabsType);
    const dispatch = useHookDispatch();
    const handleChangeTab = (type: string) => {
        dispatch({ type: TabsActionTypes.TOGGLE_TABS, payload: type });
    };

    return (
        <header className={cx("header", isMobile && "header-mobile")}>
            <div className={cx(!isMobile && "container", !isMobile ? "header__inner" : "header__inner-mobile")}>
                <Suspense fallback="...loader">
                    <HeaderToolsLeft title={title} isMobile={isMobile} />
                    {title === "Projects" && !isMobile && (
                        <Tabs tabsType={tabsType} isMobile={isMobile} handleChangeTab={handleChangeTab} />
                    )}
                    {title === "Tasks" && isMobile && <TabsMobile />}
                    {!isMobile && <HTR />}
                </Suspense>
            </div>
        </header>
    );
};
