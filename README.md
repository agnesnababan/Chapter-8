# BCR API

Di dalam repository ini terdapat implementasi API dari Binar Car Rental.
Tugas kalian disini adalah:
1. Fork repository
2. Tulis unit test di dalam repository ini menggunakan `jest`.
3. Coverage minimal 70%

## Deployement
https://agnes-challenge-chapter-8-deployment.up.railway.app/

## Hasil Test

                                                                       
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                          
------------------------------|---------|----------|---------|---------|-------------------------------------                                                                       
All files                     |   87.62 |    80.88 |   87.23 |   87.62 |                                                                                                            
 app                          |     100 |      100 |     100 |     100 |                                                                                                            
  index.js                    |     100 |      100 |     100 |     100 |                                     
  router.js                   |     100 |      100 |     100 |     100 | 
 app/controllers              |   77.17 |    76.19 |   84.61 |   77.17 | 
  ApplicationController.js    |   90.19 |      100 |   83.33 |   90.19 | 5-9
  AuthenticationController.js |   90.41 |       75 |     100 |   90.41 | 81-82,93-96,117-118,125-128,133-136
  CarController.js            |   59.65 |    69.23 |      70 |   59.65 | 35-62,84-87,105-134,137-139,158-163
  index.js                    |     100 |      100 |     100 |     100 | 
 app/errors                   |   96.03 |      100 |   81.81 |   96.03 | 
  ApplicationError.js         |     100 |      100 |     100 |     100 | 
  CarAlreadyRentedError.js    |   69.23 |      100 |       0 |   69.23 | 5-6,9-10
  EmailNotRegisteredError.js  |     100 |      100 |     100 |     100 | 
  InsufficientAccessError.js  |     100 |      100 |     100 |     100 | 
  NotFoundError.js            |     100 |      100 |     100 |     100 | 
  WrongPasswordError.js       |     100 |      100 |     100 |     100 | 
  index.js                    |     100 |      100 |     100 |     100 | 
 app/models                   |   99.43 |    86.66 |     100 |   99.43 | 
  car.js                      |     100 |      100 |     100 |     100 | 
  index.js                    |   97.29 |    66.66 |     100 |   97.29 | 13
  role.js                     |     100 |      100 |     100 |     100 | 
  user.js                     |     100 |      100 |     100 |     100 | 
  usercar.js                  |     100 |      100 |     100 |     100 | 
 config                       |     100 |        0 |     100 |     100 | 
  application.js              |     100 |        0 |     100 |     100 | 3
  database.js                 |     100 |      100 |     100 |     100 | 
------------------------------|---------|----------|---------|---------|-------------------------------------

Test Suites: 3 passed, 3 total

Tests:       20 passed, 20 total

Snapshots:   0 total

Time:        9.286 s