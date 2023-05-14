import "./../Component/style.css";
import cancel from "./../img/cancel.png"
import ok from "./../img/ok.png";
import pen from "./../img/pen.png";
import trash from "./../img/trash.png";
import React, { useState } from 'react';

const Block = () => {
  const [list, setList] = useState([]);
  const [images, setImages] = useState([]);

  const handleAdd = () => {
    const newInput = document.querySelector('input').value;
    if (newInput && list.length < 10) {
      setList([...list, newInput]);
      setImages([...images, false]); 
      document.querySelector('input').value = '';
    }
  };

  const handleDelete = (index) => {
    const newList = list.filter((item, i) => i !== index);
    const newImages = images.filter((item, i) => i !== index);
    setList(newList);
    setImages(newImages);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleAdd();
    }
  };

  const toggleImage = (index) => {
    const newImages = [...images];
    newImages[index] = !newImages[index];
    setImages(newImages);
  };

  const handleEdit = (index) => {
    const itemToEdit = list[index];
    document.querySelector('input').value = itemToEdit;
    const newList = list.filter((item, i) => i !== index);
    const newImages = images.filter((item, i) => i !== index);
    setList(newList);
    setImages(newImages);
  }

  return (
    <>
      <div className="block">
          <h1 className="block_name">To Do List</h1>
            <input placeholder="Enter a To Do List" type="text" onKeyDown={handleKeyDown} maxLength={30} />
          <button className="add" onClick={handleAdd}>Add</button>
        <div className="list">
          {list.map((item, index) => (
            <div key={index} className={`list${index + 1}`}>
              <h1>{item}</h1>
              <div className="list_button1">
                <button><img src={images[index] ? ok : cancel} onClick={() => toggleImage(index)} alt="" /></button>
                <button><img src={pen} alt="" onClick={() => handleEdit(index)} /></button>
                <button><img onClick={() => handleDelete(index)} src={trash} alt="" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Block;




//МЕТОДЫ МАССИВО В JAVASCRIPT
//push() - добавляет один или несколько элементов в конец массива.
//pop() - удаляет последний элемент массива и возвращает его значение.
//shift() - удаляет первый элемент массива и возвращает его значение.
//unshift() - добавляет один или несколько элементов в начало массива.
//splice() - изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.
//slice() - возвращает новый массив, содержащий часть исходного массива.
//join() - объединяет все элементы массива в одну строку.
//concat() - объединяет два или более массива в один.
//indexOf() - возвращает индекс первого вхождения указанного элемента в массиве.
//includes() - определяет, содержит ли массив определенный элемент.
//forEach() - вызывает функцию для каждого элемента в массиве.
//map() - создает новый массив, содержащий результат вызова указанной функции для каждого элемента исходного массива.
//filter() - создает новый массив, содержащий все элементы исходного массива, для которых вызов указанной функции возвращает true.
//reduce() - применяет функцию-редуктор к каждому элементу массива, возвращая одно результирующее значение.
//find() - возвращает первый элемент в массиве, который удовлетворяет условию, заданному в передаваемой функции.
//some() - возвращает true, если хотя бы один элемент в массиве удовлетворяет условию, заданному в передаваемой функции.
//every() - возвращает true, если все элементы в массиве удовлетворяют условию, заданному в передаваемой функции.
 
//ЛЯМБДА ФУНКЦИЯ
//Лямбда-функция (или функция-стрелка) - это синтаксически более короткая форма записи функции в JavaScript. Она позволяет определить функцию в одной строке без использования ключевого слова function и фигурных скобок.
//Общий синтаксис лямбда-функции выглядит следующим образом:
//(parameters) => expression
//Здесь parameters - это список параметров, которые принимает функция, а expression - это выражение, которое вычисляется и возвращается из функции.
//Пример: 
// обычная функция
//function multiply(a, b) {
  //return a * b;
//}
// лямбда-функция
//const multiply = (a, b) => a * b;
//Лямбда-функции могут использоваться во многих случаях, где требуется передать функцию как аргумент или определить функцию внутри другой функции. Они могут быть особенно полезны при работе с методами массивов, таких как map(), filter(), reduce(), где нужно передать функцию в качестве аргумента для преобразования или фильтрации элементов массива.
//Важно помнить, что лямбда-функции не создают свой собственный контекст this, поэтому они могут быть более надежным способом определения функций в некоторых случаях.



//"Пропсы" (props) - это объект, содержащий свойства (и их значения), которые передаются компоненту React в качестве аргументов. Пропсы используются для передачи данных от родительского компонента к дочернему компоненту.
//Компонент-родитель может передать пропсы своему дочернему компоненту, используя синтаксис XML-подобных атрибутов, 
//например:
//<ChildComponent name="John" age={25} />
//В данном примере name и age являются пропсами, передаваемыми в компонент ChildComponent. В самом компоненте ChildComponent пропсы могут быть доступны через объект props. Например:
//function ChildComponent(props) {
  //return (
    //<div>
      //<p>Name: {props.name}</p>
      //<p>Age: {props.age}</p>
    //</div>
 // );
//}
//Пропсы могут быть любым типом данных, включая строки, числа, массивы, объекты, функции и т.д. Кроме того, пропсы могут быть использованы для передачи функций из родительского компонента в дочерний компонент, что позволяет реализовать обратный вызов (callback) для выполнения действий в родительском компоненте на основе событий в дочернем компоненте.
//Пропсы - это важный механизм передачи данных между компонентами React и являются одним из фундаментальных понятий в React.





