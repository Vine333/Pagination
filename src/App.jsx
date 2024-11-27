import {ConfigProvider, theme} from 'antd';
import {useAppearanceStore} from "./store/index.js";
import appTheme from "./theme";
import AppRoutes from "./routes/index.jsx";

const {defaultAlgorithm, darkAlgorithm} = theme;

function App() {
    const isDark = useAppearanceStore(state => state.isDark);

    return (
        <ConfigProvider theme={{
            algorithm: isDark ? darkAlgorithm : defaultAlgorithm,
            token: {
                token: appTheme.token
            },
        }}>
            <AppRoutes/>
        </ConfigProvider>
    )
}

export default App
