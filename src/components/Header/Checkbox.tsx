import { useContext } from "react"

import { ShopContext } from "../../context/context";

export const Checkbox = () => {
  const {toggleTheme, theme} = useContext(ShopContext);
  console.log(theme)
  return (
  <button className="checkbox" title="сменить тему" onClick={()=> toggleTheme()}>
    Сменить тему
  </button>
  )
}
