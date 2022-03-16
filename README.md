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

- клонировать проект с одноименного репозитория (git clone https://github.com/NikitaKhadnevich/AGE_SPA.git)
- **_переименовать папку проекта AGE_SPA_** на **_less12(AGE)_**. Данное обстоятельство связано с ошибкой запуска react с первоначальным именем, над этим работаю)
- перейти в папку с приложением и установить зависимости **_npm instal_** или **_npx install_** (для yarn подбирайет аналогичные команды!)
- посоле установки запустить проект командой **_npm run start_** или **_npx run start_**

# Возможные проблемы

Если у Вас не запускается проект, то:

- специфика проекта заключается в том, что он развернут на **_herokuapp_** и при попытке обратится к heroku мы попадаем в ошибку 403 - CORS Forbidden. Причины поведения прописаны тут
  https://github.com/Rob--W/cors-anywhere/#documentation. Для решения этой проблемы нам нужно - перейти в инспектор кода, вкладка console - найти красную строку с ошибкой `Failed to load resource: the server responded with a status of 403 (Forbidden)` - открыть ссылку этой строки в новом окне (open new tab) - в открывшейся вкладке нажать кнопку `Request temporary access to the demo server` - перейти на прежнюю вкладку и обновить приложение (перезагрузить)
  После этих манипуляций начнуть уходить запросы на получение данных с серверов heroku.

### Также существуют иные способы открытия проекта, базирующегося на herokuapi. Для демонстрационных целей вполне подходит предложенный мною подход. На всякий случай ссылка на пример решения проблемы тут:##### https://www.youtube.com/watch?v=zoOx1b9iBRk&ab_channel=TricksGum (если пойдете по этому пути, то компонент, который отвечает за path и URL находится: src/components/Api/Api.js)

# Результаты

В итоге получилось компактное и минималистичное приложение, построенное на базе внешнего API. Проект можно использовать как небольшую шпаргалку и/или напоминалку по основным характеристикам тех или иных аспектов игры. Данный проект подойдет пользователям, которым нужно получить быстро краткую и лаконичную информацию об игре, или обновить в памяти необходимые сведения.
