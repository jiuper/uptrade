import { useEffect } from "react";
import { Route, Routes } from "react-router";
import { useLocation, useNavigate } from "react-router-dom";

import { ROUTES } from "../shared/const/Routes";
import { useWindowSize } from "../shared/lib/hooks/useWindowSize";
import { useHookDispatch, useHookSelector } from "../shared/lib/module/store/configStore";
import { GeneralActionType } from "../shared/type/general.type";
import { Layout } from "../widgets/Layout";

import { Projects } from "./Projects/Projects";
import { Tasks } from "./Tasks/Tasks";

export const Routing = () => {
    const dispatch = useHookDispatch();
    const url = useLocation();
    const href = useNavigate();
    const { width } = useWindowSize();
    const isMobile = useHookSelector((state) => state.width.isMobile);

    useEffect(() => {
        if (url.pathname === ROUTES.tasks || url.pathname === ROUTES.err) {
            href(ROUTES.projects);
        }
    }, [href, url]);

    useEffect(() => {
        dispatch({ type: GeneralActionType.RESIZE_WIDTH, payload: width <= 768 });
    }, [dispatch, width]);

    return (
        <Layout isMobile={isMobile}>
            <Routes>
                <Route index path={ROUTES.projects} element={<Projects isMobile={isMobile} />} />
                <Route path={`${ROUTES.tasks}/:id`} element={<Tasks isMobile={isMobile} />} />
            </Routes>
        </Layout>
    );
};
