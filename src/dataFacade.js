const URL = "http://localhost:3456/api";

function handleHttpErrors(res){
  if(!res.ok){
    return Promise.reject({status: res.status, fullError: res.json() })
  }
  return res.json();
}
 
class DataFacade {
  
  /*
  OBSERVE-1: This returns a promise, NOT the actual data, you must handle asynchronicity by the client
  OBSERVE-2: To "simplify" how to handle asynchronicity you can use async/await as sketche in the example below*/
  getPersons() {
    return fetch(URL).then(handleHttpErrors)
  }
  
  // In order to use await, a method must be "marked" with async
  // async getPersons() {
  //   return await fetch(URL).then(handleHttpErrors)
  // }
  

 }

export default new DataFacade();