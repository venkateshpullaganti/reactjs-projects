import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../logo.svg'

import { E_COMMERCE_PRODUCTS_PATH } from '../../constants/RouteConstants'
import { COUNTRIES_PATH } from '../../constants/NavigationConstants'

export default class HomePage extends React.Component {
   // gotoLoginPage() {
   //     return <Redirect to={{ pathname: E_COMMERCE_SIGN_IN_PATH }} />;
   // }
   render() {
      return (
         <div className='h-screen bg-gray-800 flex justify-center items-center flex-col text-white'>
            <header>
               <img src={logo} className='App-logo' alt='logo' />
            </header>
            <ul className=' w-1/6 flex flex-col p-2 items-center'>
               <h1 className='heading'>Utility Apps : </h1>
               <li>
                  <a href='https://lets-ride-15dbc.web.app/'>Let's Ride</a>
               </li>
               <li>
                  <Link to={COUNTRIES_PATH}>Countries Dashboard</Link>
               </li>
               <li>
                  <Link to={E_COMMERCE_PRODUCTS_PATH}>E-Commerce Site</Link>
               </li>
               {/* <li>
                  <Link to='/todo-list'>TodoList</Link>
               </li> */}
               <h1 className='heading'>Games : </h1>

               <li>
                  <Link to='/emojis-game'>Emojis Game</Link>
               </li>
               <li>
                  <Link to='/grid-memory-game'>Grid Memory Game</Link>
               </li>
               {/* <li>
                  <Link to='/users'>Users Page</Link>
               </li>

               <li>
                  <Link to='/events-app'>Events App</Link>
               </li>

               <li>
                  <Link to='/form-components'>Form Components</Link>
               </li>
               <li>
                  <Link to='/counter-page'>Counter Page</Link>
               </li>
               <li>
                  <Link to='/todo-list-api'>Todo List With API</Link>
               </li>
               <li>
                  <Link to='/todo-list-mobx'>TodoList Mobx</Link>
               </li>
               <li>
                  <Link to='/todo-list-mobx-v2'>TodoList Mobx V2 (Model)</Link>
               </li>

               <li>
                  <Link to={'/practice-advanced-concepts'}>Adv Topics</Link>
               </li> */}
            </ul>
         </div>
      )
   }
}

export { HomePage }

// function gotoGridScreenIfLoggedIn() {
//     return <Redirect to={{ pathname: "/grid-memory-game" }} />;
// }

// if (getAccessToken() === undefined) {
//     return this.gotoLoginPage();
// } else
