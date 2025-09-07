import List from "./components/list/List"
import Chat from "./components/chat/Chat"
import Detail from "./components/detail/Detail"
import "./app.scss"


const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
      test
    </div>
  )
}

export default App