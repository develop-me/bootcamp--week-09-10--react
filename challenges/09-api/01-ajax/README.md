# Challenges

- Use your existing React App
- Use the Network panel to check requests are being made (filter by "XHR" to just see AJAX requests)
- Use Postman to check your API requests if you're not sure what you need to send

## AJAX

We're going to use the blog end-point of [`restful.training`](https://github.com/develop-me/restful.training#restfultraining) API that you worked with when your first learnt about APIs. (You'll need the password `wsYZzT8_m_pwBNDjSk77` to sign-up if you've lost your login.)

**Don't make too many requests in quick succession or you'll be blocked for a minute**

### Setup

- Make sure you install the axios library and then setup a config file (`src/axios.js`) that looks something like this:

    ```javascript
    // import the library version of axios
    import axios from "axios";

    // create a version of axios with useful defaults
    export default axios.create({
        baseURL: "https://restful.training/api/blog",
        headers: {
            // make sure we get JSON back
            Accept: "application/json",

            // use your own key
            Authorization: "Bearer 1e1c27284c86wom8922bat0f217f784b097b513",
        },
    });
    ```

    **It's generally not a good idea to add API tokens to a public GitHub repo. So you might want to add `src/axios.js` to your `.gitignore`. Be sure to add a note to your README about how to set it up again on another machine.**

- Create a new file `src/ajax.js` and write all of the following challenges in there. Make sure you use the local version of axios with your configuration

    ```js
    // import axios with configuration
    import axios from "./axios";

    // ...challenges here
    ```

- Make sure you import `ajax` in your `index.js`

    ```js
    import "./ajax";
    ```

- So you'll have:

    ```
    src/
        axios.js    -- axios config file
        ajax.js     -- challenges in here
        index.js    -- imports in ajax.js
        ...other React files
    ```

    This isn't a very realistic file setup, but we need somewhere to practice before we start doing it with React



## Challenges

**Make sure you get the appropriate output**: you shouldn't have any stray `data` properties lying around.

After you've got a challenge working, comment it out and move onto the next one. Otherwise later challenges (such as `DELETE`) can cause issues with earlier ones.

1) Use `console.log()` to output an array with all of your article data from the API:

    ```js
    [
        { id: 12, title: "Spoons", content: "Spoons are a thing", tags: ["spoons", "blah"] },
        { id: 34, title: "Neo", content: "No, they're not", tags: ["spoons", "dated reference"] },
        // ...etc
    ]
    ```

2) Create a new article using axios and then `console.log()` its ID

3) Fetch one of your articles from the API and `console.log()` it:

    ```js
    { id: 48, title: "The debate continues", content: "Spoons probably exist", tags: ["spoons", "science"] },
    ```

4) Add a new tag to one of your articles and `console.log()` the tags array from the response:

    ```js
    ["spoons", "science", "spoon truther"]
    ```

5) Delete an article and `console.log()` "Deleted" once you get back a response

6) Add a comment to an article using axios and `console.log()` its ID

7) Use `console.log()` to list all of the comments for one of your articles

8) Use `console.log()` to output a list of all the tags

    ```js
    [
        {
            "id": 1,
            "name": "spoons"
        },
        {
            "id": 2,
            "name": "science"
        }
    ]
    ```



## Tricksy

1) Try fetching an article with an ID that doesn't exist and `console.log()` "Not found" when it fails

2) Using `console.log()` output an array of *just* the titles of all the articles

    ```js
    ["Spoons", "Neo", "The debate continues"]
    ```

## Über-Tricksy

1) Use [`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) to output a frequency table for how often a tag is used

    ```js
    spoons            4
    science           2
    dated reference    1
    ```
