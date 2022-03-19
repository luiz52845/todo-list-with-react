
import { useState } from 'react';
import * as C from './app-styles';
import { ListItem } from './compoments/ListItem';
import { AddArea } from './compoments/AddArea';
import { Item } from './types/Item';


const App = () => {

  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "comprar pão",
      done: false,
    },
    {
      id: 1,
      name: "comprar frutas e verduras",
      done: false,
    }

  ]);

  const handleAddTask = (taskName: string) => {

    let newList = [...list];

    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });

    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>
          Lista de Tarefas
        </C.Header>

        
        <AddArea onEnter={handleAddTask}></AddArea>

        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}



      </C.Area>

    </C.Container>

  );
}

export default App;