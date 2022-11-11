import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { EventProvider } from './Context/EventContext';
import { ModalProvider } from './Context/ModalContext';
import { ThemeProvider } from './Context/ThemeContext';

const ProvidedApp = () => {
    return (
        <ThemeProvider>
            <ModalProvider>
                <EventProvider>
                    <App />
                </EventProvider>
            </ModalProvider>
        </ThemeProvider>
    )
}
AppRegistry.registerComponent(appName, () => ProvidedApp);
