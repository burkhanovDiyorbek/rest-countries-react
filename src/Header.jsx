import { useEffect, useState } from "react";

export const Header = () => {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  document.body.classList = isDark ? "body-dark" : "body";

  return (
    <header className="header">
      <div className="container header-container">
        <h2>Where in the world?</h2>
        <div className="mode" onClick={()=>setIsDark(!isDark)}>
          <img src=".././image/moon-light.svg" alt="moon" className="ligth" />
          <img src=".././image/moon.svg" alt="moon" className="dark" />
          <p>Dark Mode</p>
        </div>
      </div>
    </header>
  );
};
