import { createRoot } from 'react-dom/client';

import { HashRouter, HashRouter as Router } from 'react-router-dom';

import App from './App';
import { AuthContextProvider } from './store/auth-context';
import { ProjectContextProvider } from './store/project-context';
import { TaskContextProvider } from './store/tasks-context';
import { TrackerContextProvider } from './store/tracker-context';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <AuthContextProvider>
    <TrackerContextProvider>
      <TaskContextProvider>
        <ProjectContextProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </ProjectContextProvider>
      </TaskContextProvider>
    </TrackerContextProvider>
  </AuthContextProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
