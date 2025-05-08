import { useState } from 'react'
import FunComponent from './components/FunctionalComponents/FunComponent'
import MyComponent from './components/FunctionalComponents/FunComponent'
import Greeting1 from './components/props/Greeting1'
import Greeting2 from './components/props/Greeting2'
import { UserCard1, UserCard2 } from './components/props/ObjectPassing'
import { Welcome1, Welcome2 } from './components/conditionalRendering/Welcome'
import { ChildComponent } from './components/props/PassFunctions'
import FruitList from './components/conditionalRendering/FruitList'
import { UserLists } from './components/conditionalRendering/UserLists'

import Common from './components/Common'


function App() {
  

  const user = {
    name: "Jane Doe",
    email: "jane@example.com",
    age: 30
  };

  const handleGreet = (name) => {
      alert(`Hello from ${name}!`);
  };
  
  

  return (
    <>
      {/* <FunComponent/>
      <MyComponent/>
      <Greeting1 name = "jai shree krishna"/>
      <Greeting2 name = "Abhay" age = "23"/>
      <Greeting2 name = "Abhay"/>
      <UserCard1 user = {user}/>
      <UserCard2 user = {user}/>

      <Welcome1 isLoggedIn={true} />
      <Welcome2 isLoggedIn={false} />

      <ChildComponent onGreet={handleGreet} /> */}
      {/* <FruitList/>
      <UserLists/> */}

      <Common/>
    </>
  )
}

export default App
