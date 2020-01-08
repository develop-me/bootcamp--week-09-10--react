# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

- Use the Network panel to check things are working as you'd expect.

- Use Postman to check your API requests if you're not sure what you need to send.

- Put these components in a `blog` directory inside your existing React app.

## APIs with React

For all of these challenges use the [`restful.training`](https://github.com/develop-me/restful.training#restfultraining) API that you worked with in the Laravel week. (You'll need the password `wsYZzT8_m_pwBNDjSk77` to sign-up if you've lost your login.)

Make sure you install the axios library and then setup a config file that looks something like this:

```javascript
// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://wombat.restful.training/api/blog",

    // use your own key
    params: {
        key: "1e1c27284c86wom8922bat0f217f784b097b513",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});
```

**The `params` property is broken in axios v0.19. If you get a `401` error try running `npm install axios@0.18.0` and then re-running `npm start`**

These challenges all involve making a `GET` request when a component first loads. You should show a loading message until you get back a response:

- Create a component `<Articles>` which lists all of the articles. It should show when you visit `/articles`

![Articles](img/articles.png)

- Create a component `<Article id={ number }>` which shows a specific article based on its `id`. It should show when you visit `/articles/{id}`
    - Update your `<Articles>` component to link through to `<Article>`

![Article](img/article.png)

- Create a component `<Comments articleID={ number }>` which lists all of the comments for a given article.
    - Update your `<Article>` component to use the `<Comments>` component at the bottom

![Comments](img/comments.png)

These challenges all involve sending data to the server when a form is submitted.

- Create a component `<CreateArticle>` which allows you to submit an article to the API. You should be able to get to it by visiting `/articles/create`

![Create Article](img/create-article.png)

- Create a component `<CreateComment>` which allows you to submit a comment for a specific article to the API
    - Add it to the `<Article>` component  above the `<Comments>` component

![Create Comment](img/create-comment.png)

## Tricksy

- Create a component `<EditArticle>` which allows you to update an article. You should be able to get to it by visiting `/articles/{id}`. It will need to load the article information when the component first loads and submit it with a `PUT` request when the form is submitted.

![Edit Article](img/edit-article.png)

- Update your `<Article>` and `<EditArticle>` components to show a 404 message if it isn't found on the server

## Über-Tricksy

- If you submit incorrect data to `<CreateArticle>`, `<CreateComment>` or `<EditArticle>` you will get a `422` response. Use this to show validation errors to the user. You'll need to use Axios' error handling.
