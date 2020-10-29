import React, { useEffect, useState, useRef } from 'react';

import AddTodo from '../../components/AddTodo';
import Header from '../../components/Header';
import TodoBox from '../../components/TodoBox';

const Todolist = (props) => {
  const [showInput, setShowInput] = useState(false);
  const [items, setItems] = useState([]);
  const isFirstRun = useRef(true);
  const [item, setItem] = useState('');
  const CACHE_KEY = 'todolistapp000';
  const checkStorage = typeof(Storage) || undefined;
  
  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    if (checkStorage) {
      localStorage.setItem(CACHE_KEY, JSON.stringify(items));
    }
  }, [checkStorage,items]);

  useEffect(() => {
    let historyItems = [];
    
    if (checkStorage) {
      historyItems = JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    }

    setItems(historyItems);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showInputHandler = () => {
    setShowInput((prevState) => !prevState);
  }

  const inputChangeHandler = (e) => {
    setItem(e.target.value);
  }

  const addClickHandler = (e) => {
    e.preventDefault();

    if (item.trim().length === 0) {
      return alert('Isi dengan benar!');
    }

    const tempItem = {
      id: Date.now(),
      text: item,
      done: false
    }

    setItems(prevState => prevState.concat(tempItem));
    setItem('');
  }
  
  const activityClickHandler = (itemId, e) => {
    const itemsTmp = [...items];

    const itemIndex = itemsTmp.findIndex(item => item.id === itemId);

    const newItem = {
      id: itemId,
      text: itemsTmp[itemIndex].text,
      done: !itemsTmp[itemIndex].done
    };

    itemsTmp.splice(itemIndex, 1);

    if (items[itemIndex].done === true) {
      itemsTmp.push(newItem);
    } else {
      itemsTmp.unshift(newItem);
    }

    setItems(itemsTmp);
  }

  const activityRemoveHandler = (itemId) => {
    const itemsTmp = [...items];

    const itemIndex = itemsTmp.findIndex(item => item.id === itemId);

    if(itemsTmp[itemIndex].done === false){
      if (window.confirm(`Tugas ini belum kamu selesaikan!\nYakin ingin menghapus "${items[itemIndex].text}" ?`) === false) {
        return;
      }
    }

    itemsTmp.splice(itemIndex, 1);

    setItems(itemsTmp);
  }

  return (
    <div className="main">
      <Header />

      <AddTodo
        itemValue={item}
        showInput={showInput} 
        showClicked={showInputHandler}
        addClicked={addClickHandler}
        inputChange={inputChangeHandler}/>

      <TodoBox 
        activityClick={activityClickHandler}
        activityRemove={activityRemoveHandler}
        activityItems={items} />
    </div>
  );
}

export default Todolist;