import "./App.css";
import { AppRoutes } from "./AppRoutes";
import AuthProvider from "./contexts/AuthProvider";
import TaskProvider from "./contexts/TaskProvider";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <AppRoutes />
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
