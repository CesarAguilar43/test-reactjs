import { NavBar } from "../components/navbar/navbar";
import "../container/global/layout.css";

export default function Layout(props) {
  return (
    <>
      <div className="container">
        <NavBar />
        <main>{props.children}</main>
      </div>
    </>
  );
}
