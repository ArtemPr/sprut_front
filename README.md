1. "react": "^17.0.2", 18 рано
https://ru.reactjs.org/
функциональные компоненты, хуки useState, useEffect

2. create-react-app
https://create-react-app.dev/
Разворачивает стандартное приложение на реакте, поменять основные пакеты в package.json:
"@testing-library/jest-dom": "^5.16.1",
"@testing-library/react": "^12.1.2",
"@testing-library/user-event": "^13.5.0",
"react": "^17.0.2",
"react-dom": "^17.0.2",
"react-scripts": "5.0.0",

3. "gh-pages": "^3.2.3",
https://github.com/gitname/react-gh-pages
Деплой на гитхаб с развертыванием 


3. webpack 5
https://webpack.js.org/
Вебпак — это сборщик модулей, анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».
В create-react-app он явно не виден, но через eject можно руками прописать свои зависимости

4. react-router 6
https://reactrouter.com/
Navlink, Router, useParams()
Роутинг для одностраничного приложения
Простые защищенные роуты через роуты и useContext()

5. ant design 4.21.6
https://ant.design/
Библиотека реакт-компонентов
Button https://ant.design/components/button/, 
Form https://ant.design/components/form/,
Input, Select,  
Menu, SubMenu https://ant.design/components/menu/, 
Pagination https://ant.design/components/pagination/,
Drawer (выезжающие модалки) https://ant.design/components/drawer/,
Table https://ant.design/components/table/,
Icons https://ant.design/components/icon/, 
Tooltip https://ant.design/components/tooltip/

дефолтные переменные тем написаны в .less. Писать проект на .less - надо настраивать webpack, непопулярное решение, по умолчанию стоит sass.

переопределить дефолтные переменные можно через пакет https://www.npmjs.com/package/@craco/craco

6.styled-components
https://styled-components.com/
Для своих кастомных компонентов стоит использовать библитотеку styled-components (создаёт уникальные классы, которые не пересекаются с классами библиотек, например class="sc-runner-15 bZaAjc")

7. MobX – менеджер состояния 
https://mobx.js.org/README.html
Упрощенная альтернатива Redux
