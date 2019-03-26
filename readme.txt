1 В консоли  - npm install
1 В консоли для разворота дампа бд - mongorestore --db exchange --drop dump
2 В консоли из текущей папки - npm start
3 Параметры для текущего запроса: 

let params = {
  Exchange: 'KRAKEN',
  Quote: 'USD',
  Base: 'BTC'
}


4 В браузере - http://localhost:4000/data

5 В бд появится коллекция с 22мя объектами такого формата:

  Exchange: type: String,
  Base: String,
  Quote: String,
  TimeStart: Date,
  Values: Array
});

(то есть 22 дня)