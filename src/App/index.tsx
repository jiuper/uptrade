import {Routing} from "../pages";

import {withRouter} from "./providers";

import "./index.scss";

const App = () => {
    return withRouter(() => <Routing/>);
};

export default App;
