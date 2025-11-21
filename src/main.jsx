import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import SettingsForm from "./components/SettingsForm.jsx"

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <SettingsForm />
  </>
)
