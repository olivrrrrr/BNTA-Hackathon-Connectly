import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { ThemeProvider } from './Context/ThemeContext';

const ProvidedApp = () => {
    return <ThemeProvider><App /></ThemeProvider>
}
AppRegistry.registerComponent(appName, () => ProvidedApp);
