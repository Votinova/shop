
import { useContext} from "react";
import { ShopContext } from "../../context/context";

export const FormSearch = () => {
  
  const { setSearchTerm }= useContext(ShopContext);
  const inputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  return (
   <form className='formSearch' >
    <label className="label">
      Поиск
    </label>
    <input title='search' type="text" onChange={(e) => inputChange(e)} className="input">
    </input>
   </form>
  )
}
