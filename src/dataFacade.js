const URL = "http://localhost:3456/api";

class DataFacade {
  
  constructor(){
     this._persons = [];
     this.getPersons();
  }

  getPersons = (cached) => {
    if(cached){
      if(this.handler){
        this.handler(this._persons);
      }
    }
    fetch(URL)
      .then(function (res) {
        return res.json();
      }).then((data) => {
        let persons = data;
        this._persons = data;
        if (this.handler) {
          this.handler(persons);
        };
      });
  }

  setPersonsObserver(handler) {
    this.handler = handler;
  }

}

export default new DataFacade();