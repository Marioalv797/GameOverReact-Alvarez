import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const onAdd = (quantity) => {
    console.log(quantity)
  }

  return (
    <div className="App">
      <ItemListContainer greeting={'Bienvenido'}/>
      <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </div>
  );
}

export default App;
