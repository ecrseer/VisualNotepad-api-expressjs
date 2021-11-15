Api que alimenta o app visual notepad-android
========================

Servidor simples em express+ nodejs que atraves do google search api 
se torna uma api que serve imagens atraves da palavra pesquisada 

## Deploy
To deploy this application simply create a new Heroku app

```
heroku create
```

and then just push the sources to Heroku

```
git push heroku master
```

Heroku will download all necessary libraries and fire the web
process defined in [Procfile](Procfile) that will build and start
the application.

## How this works

Typically you will add typescript as a devDependency to your package.json.
But this won't work on Heroku since those dependencies are not downloaded
(due to `NODE_ENV` being set to `production`).

In order to go around this issue you just simply need to add typescript
as a regular dependency and build the project after each push.
