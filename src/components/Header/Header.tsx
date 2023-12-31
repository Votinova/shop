import'./Header.css';
import { FormSearch } from './FormSearch';
import { Checkbox } from './Checkbox';

 const Header = () => {
  return (
    <div className='header'>
      <span className='title'>Смартфоны </span>
      <FormSearch />
      <Checkbox />
    </div>
  )
}
export default Header;
