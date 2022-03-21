# O проекте

**Этот проект является SPA-энциклопеией по компьютерной игре Age Of Empires II. В этой энциклопедии можно ознакомится с основными характеристиками/спецификациями тех или иных юнитов, фракций, их технологий и сооружений, представленных в этой замечательной игре.**

## Оглавление:

1. [Цели/Задачи](#Цели/Задачи)
2. [Запуск](#Запуск)
3. [Результаты](#Результаты)

# Цели/Задачи

Основными **_Целями_** создания приложения были:

- создание классического MVC приложения
- придерживаться концепций SPA при проектировании
- приложение должно быть построено на базе React/Redux
- использование актуальных паттернов при создании проекта
- компонентный подход и модульность, как обязательное условие создания SPA

# Основными **_Задачами_** создания приложения были:

- организация хранилища данных для каждого компонента (initialState)
- создание контроллера для реакции и обработки пользовательских событий (reducers, aсtions)
- внедрение в проект Middleware (Redux-Saga) для осуществления запросов пользователя
- конструирование и создание компонентов для отрисовки DOM
- создание инкапсулированных компонентов, модульность
- создание тестов для проверки правильности работы приложения (опционально для модулей)

# Запуск

Проект базируется на React с использованием Redux + Middleware, для запуска необходимо

- клонировать проект с одноименного репозитория `git clone https://github.com/NikitaKhadnevich/AGE_SPA.git`
- перейти в папку с приложением и установить зависимости `npm instal` или `npx install` (для yarn подбирайет аналогичные команды!)
- посоле установки запустить проект командой `npm run start` или `npx run start`
- для тестирования использовать команду `npm run test` 

# Возможные проблемы

Если у Вас не запускается проект, то:

- специфика проекта заключается в том, что он развернут на **_herokuapp_** и при попытке обратится к heroku мы попадаем в ошибку 403 - CORS Forbidden. Причины поведения прописаны тут
  https://github.com/Rob--W/cors-anywhere/#documentation. Для решения этой проблемы нам нужно - перейти в инспектор кода, вкладка console - найти красную строку с ошибкой `Failed to load resource: the server responded with a status of 403 (Forbidden)` - открыть ссылку этой строки в новом окне (open new tab) - в открывшейся вкладке нажать кнопку `Request temporary access to the demo server` - перейти на прежнюю вкладку и обновить приложение (перезагрузить)
  После этих манипуляций начнуть уходить запросы на получение данных с серверов heroku.

### Также существуют иные способы открытия проекта, базирующегося на herokuapi. Для демонстрационных целей вполне подходит предложенный мною подход. На всякий случай ссылка на пример решения проблемы тут:##### https://www.youtube.com/watch?v=zoOx1b9iBRk&ab_channel=TricksGum (если пойдете по этому пути, то компонент, который отвечает за path и URL находится: src/components/Api/Api.js)

# Результаты

В итоге получилось компактное и минималистичное приложение, построенное на базе внешнего API. Проект можно использовать как небольшую шпаргалку и/или напоминалку по основным характеристикам тех или иных аспектов игры. Данный проект подойдет пользователям, которым нужно получить быстро краткую и лаконичную информацию об игре, или обновить в памяти необходимые сведения.

# Стек

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
