import global from "./Header.module.css";
import igniteLogo from "../assets/ignite-logo.svg";

console.log(igniteLogo);

export function Header() {
  return (
    <>
      <header className={global.header}>
        <img src={igniteLogo} alt="logo tipo do ignite" />
      </header>
    </>
  );
}
