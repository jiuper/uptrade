import cnBind from "classnames/bind";

import { useHookDispatch } from "../../../shared/lib/module/store/configStore";
import { TabsActionTypes } from "../../../shared/type/tabs.type";
import { Button } from "../../../shared/ui/Button/Button";

import styles from "./style.module.scss";

const cx = cnBind.bind(styles);

export const TabsMobile = () => {
    const dispatch = useHookDispatch();
    const tabs: string[] = ["Queue", "Development", "Done", "All"];
    const handleAction = (type: string) => {
        dispatch({ type: TabsActionTypes.TOGGLE_TABS_MOBILE, payload: type });
    };
    const handleClassNames = (i: number, tab: string) => {
        return tab === tabs[i] && `btn-${tab.toLowerCase()}`;
    };

    return (
        <div className={cx("tabs")}>
            {tabs.map((tab, i) => (
                <Button key={i} className={cx("tab", handleClassNames(i, tab))} handleClick={() => handleAction(tab)}>
                    {tab}
                </Button>
            ))}
        </div>
    );
};
