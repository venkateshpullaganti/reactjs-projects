import React from 'react'
import { Link } from 'react-router-dom'

import { COUNTRIES_PATH } from '../constants/NavigationConstants'

export default function Home() {
   return (
      <nav>
         <ul>
            <li>
               <Link to='/todo-list'>TodoList</Link>
            </li>
            <li>
               <Link to={COUNTRIES_PATH}>Countries Dashboard</Link>
            </li>
            <li>
               <Link to='/form-components'>Form Components</Link>
            </li>
         </ul>
      </nav>
   )
}
export { Home }
