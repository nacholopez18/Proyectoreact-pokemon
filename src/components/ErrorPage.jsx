import { Link } from "react-router-dom";
import "./ErrorPage.css";
export default function () {
  return (
    <main className="error-container">
      <img src="404.png" />
      <Link to="/">Go back to main</Link>
    </main>
  );
}
