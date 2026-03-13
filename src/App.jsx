import { Provider } from "react-redux";
import store from "./app/store";
import Dashboard from "./pages/Dashborad";
import "./index.css";

export default function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}