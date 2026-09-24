import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NameList from './NamesList'
import NameListIndex from './NameListIndex'
import FruitList from './FruitList'
import UserList from './Components/01ArraysofObjects/UserList'
import ProductsList from './Components/01ArraysofObjects/ProductsList'
import ProductsListShorter from './Components/01ArraysofObjects/ProductsListShorter'
import TodoList from './Components/01ArraysofObjects/TodoList'

function App() {

  return (
    <>
      {/* <NameList /> */}
      {/* <NameListIndex /> */}
      {/* <FruitList />  */}
      {/* <UserList /> */}
      {/* <UserList /> */}
      {/* <ProductsList /> */}
      {/* <ProductsListShorter /> */}
      <TodoList />
    </>
  )
}

export default App
