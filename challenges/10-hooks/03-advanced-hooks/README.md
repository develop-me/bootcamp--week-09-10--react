# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

## Advanced Hooks

Use Hooks for all of the challenges below.

- Create a component `<Timer start={ number }>` that shows a countdown starting at `start`. When the countdown is complete show the message "Lift Off!".

    You can use [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setInterval) to call a function repeatedly after a set period of time.

    - Make sure you [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)  when the timer reaches `0` or if the component is unmounted

    ```js
    let intervalID = setInterval(/* stuff */);

    // elsewhere
    clearInterval(intervalID);
    ```

## Tricksy

From the API challenges:

- Rewrite your `<Articles>` component to use Hooks. Make sure you don't create an infinite loop of API requests! You'll get locked out of the API for a minute if you do.

- Rewrite your `<Article>` component to use Hooks.

- Rewrite your `<Comments>` component to use Hooks.

- Rewrite your `<EditArticle>` component to use Hooks.

- Create a custom hook called `useArticle` that pulls out your repeated `GET /articles/{id}` logic (in `<Article>` and `<EditArticle>`)

- You may as well Hookerize the rest of your API components now you've started!
