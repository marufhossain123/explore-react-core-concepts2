import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';
// import Friend from './Friend';
function App() {
  function handleClick(){
    alert('btn clicked');
  }
  const handleClick2 = () =>  alert('btn clicked 2');
  const handleClick4 = (num) => alert(num + 2)
  
  return (
    <>
      <h3>React core concepts</h3>
      {/* <Friend></Friend> */}
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me 2</button>
      <button onClick={() => alert('btn clicked 3') }>click me 3</button>
      <button onClick={() => handleClick4(3)}>four</button>

    </>
  )
}
export default App
