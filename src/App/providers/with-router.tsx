import { Suspense } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../../shared/lib/module/store/store";

export const withRouter = (component: () => JSX.Element) => (
    <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter>
                <Suspense fallback="Loader...">{component()}</Suspense>
            </BrowserRouter>
        </DndProvider>
    </Provider>
);
