/* @jsx jsx */

import { jsx } from '@emotion/core'
import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { observer, Provider } from 'mobx-react'
import { observable, autorun } from 'mobx'

import './App.css'

import './components/todo-list/todo-list.css'
import { TodoList } from './components/todo-list'
import { HomePage } from './components/HomePage'
import { FormComponents } from './components/form-components'
import { FavouriteDessert } from './components/form-components/favourite-dessert'
import { Greetings } from './components/form-components/Greetings'
import { VisitedCities } from './components/form-components/visited-cities'
import { YourState } from './components/form-components/your-state'
import { DisableOrEnable } from './components/form-components/disable-enable'
import Covid19Dashboard from './components/covid19-dashboard'
import CountryDetails from './components/covid19-dashboard/country-details'
import Page1 from './components/Page1'
import EmojiGame from './components/EmojiGame'
import CounterPage from './components/CounterPage'
import { themeStore } from './stores/ThemeStore'
import TodoListMobx from './components/todo-list-mobx'
import TodoListMobxV2 from './components/todo-list-mobx-v2'
import EventsApp from './components/events-app'
import GridMemoryGame from './components/GridMemoryGame'
import UsersPage from './components/UsersPage'
import TodoListAPI from './components/todo-list-api'
import stores from './stores'
import globalStores from './common/stores'
import boutiqueRoutes from './Botique/routes'
import authenticationRoutes from './Authentication/routes'
import { ProtectedRoute } from './common/ProtectedRoute'
import Practice from './components/Practice'

import { ThemeContext } from './Context/ThemeContex'

import { PracticeAdvancedConceptsRoute } from './common/routes/PracticeAdvancedConceptsRoute'

@observer
class App extends React.Component {
   render() {
      console.log('render app.js')
      return (
         <Provider {...stores} {...globalStores}>
            <HashRouter basename={process.env.PUBLIC_URL}>
               <div>
                  <Switch>
                     <Route
                        exact
                        path='/todo-list-api'
                        component={TodoListAPI}
                     />

                     <Route exact path='/users' component={UsersPage} />

                     <Route
                        exact
                        path='/grid-memory-game'
                        children={
                           <GridMemoryGame
                              selectedTheme={themeStore.getCurrentTheme()}
                              onChangeSelectedTheme={themeStore.setCurrentTheme}
                           />
                        }
                     />

                     <Route
                        exact
                        path='/counter-page'
                        children={<CounterPage />}
                     />

                     <Route exact path='/todo-list'>
                        <TodoList />
                     </Route>

                     <Route exact path='/covid19-dashboard'>
                        <ThemeContext.Provider
                           value={{
                              selectedTheme: themeStore.getCurrentTheme(),
                              onChangeSelectedTheme: themeStore.setCurrentTheme
                           }}
                        >
                           <Covid19Dashboard />
                        </ThemeContext.Provider>
                     </Route>

                     <Route exact path='/form-components'>
                        <FormComponents />
                     </Route>

                     <Route exact path='/form-components/greetings'>
                        <Greetings />
                     </Route>

                     <Route exact path='/form-components/favorite-dessert'>
                        <FavouriteDessert
                           dessertList={[
                              'Vanilla',
                              'Butterscotch',
                              'Gulab Jamum',
                              'Yoghurt Pots',
                              'Baked Banana',
                              'Chocolate'
                           ]}
                        />
                     </Route>
                     <Route exact path='/form-components/visited-cities'>
                        <VisitedCities
                           cityList={[
                              'Hyderabad',
                              'Chennai',

                              'Bangalore',
                              'Pune',
                              'Mumbai',
                              'Delhi'
                           ]}
                        />
                     </Route>
                     <Route exact path='/form-components/your-state'>
                        <YourState
                           stateList={[
                              'Andhra Pradesh',
                              'Telangana',
                              'Tamil Nadu',
                              'Kerala',
                              'Karnataka',
                              'Haryana'
                           ]}
                        />
                     </Route>

                     <Route exact path='/form-components/disable-enable'>
                        <DisableOrEnable />
                     </Route>

                     <Route exact path='/covid19-dashboard/details/:countryId'>
                        <CountryDetails
                           selectedTheme={themeStore.getCurrentTheme()}
                           onChangeSelectedTheme={themeStore.setCurrentTheme}
                        />
                     </Route>
                     <Route exact path='/page-1'>
                        <Page1 />
                     </Route>
                     <Route exact path='/emojis-game'>
                        <EmojiGame
                           selectedTheme={themeStore.getCurrentTheme()}
                           onChangeSelectedTheme={themeStore.setCurrentTheme}
                        />
                     </Route>
                     <Route
                        exact
                        path='/todo-list-mobx'
                        children={<TodoListMobx />}
                     />
                     <Route
                        exact
                        path='/todo-list-mobx-v2'
                        children={<TodoListMobxV2 />}
                     />
                     <Route exact path='/events-app' component={EventsApp} />
                     {authenticationRoutes}
                     {boutiqueRoutes}
                     <Route exact path='/practice'>
                        <Practice totalCartAmount={125430.23} />
                     </Route>
                     <Route
                        exact
                        path='/practice-advanced-concepts'
                        component={PracticeAdvancedConceptsRoute}
                     />

                     <Route exact path='/' component={HomePage} />
                  </Switch>
               </div>
            </HashRouter>
         </Provider>
      )
   }
}

export default App
