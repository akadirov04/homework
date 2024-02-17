let persons = [
  { name: "John", age: 25, city: "NewYork" },
  { name: "Alice", age: 30, city: "London" },
  { name: "Bob", age: 22, city: "Paris" },
  { name: "Alex", age: 19, city: "London" },
  { name: "Tyler", age: 24, city: "NewYork" },
  { name: "Constantine", age: 31, city: "Paris" },
  { name: "Cole", age: 21, city: "London" },
];
let cityName = prompt("название города")

function findPersonByCit(cityName) {
    return persons.filter(item =>  item.city === cityName)
  }
  
  let InCity = findPersonByCit(cityName)
  console.log(InCity);
  
  // 1. Создать функцию findPersonByCity которая принимает название города из промпта по которому возвращает массив из этого города
  
  function calculateAverageAge(persons) {
      let total = persons.reduce((a, b) => b.age + a, 0);
      let average = total / persons.length
      return average
    }
    
    let average = calculateAverageAge(persons)
    console.log(parseInt(average));
    
    // 2. функция calculateAverageAge вычисляет средний возраст в массиве persons  
    
    function addNewPerson(name, age, city) {
      let newUser = {name: name, age: age, city: city}
      return persons.push(newUser)
    } 
    
    console.log(persons);
    addNewPerson("Eve", 28, "San Francisco")
    
    // 3. функция addNewPerson добавляет нового пользователя в массив по переданным как на примере
    