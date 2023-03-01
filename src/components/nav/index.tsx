import { Link } from 'react-router-dom'
import NavStyles from './styles'

const Nav = () => {
  return (
    <NavStyles>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <Link to='/'>Home</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/'>Nav item 2</Link>
        </li>

        <li className='nav-list__item'>
          <Link to='/'>Nav Item 3</Link>
        </li>
      </ul>
    </NavStyles>
  )
}

export default Nav