import { useState } from "react";
import useDarkSide from "../../hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked: boolean): void => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <div className="">
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={26}
          // moonColor="orange"
          // sunColor="blue"
        />
      </div>
    </>
  );
}
