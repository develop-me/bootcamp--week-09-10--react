# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- Make sure you keep React DevTools ([Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)/[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)) + JS console open at all times and correct anything that it flags up.

## Lifecycle Methods

- Create a component `<GodCounter />` that when you click *anywhere* in the browser window increments a counter by 1. Make sure that you remove the event handler in `componentWillUnmount`!

- Create a component `<TwoCounters />` with the following JSX:

    ```jsx
    <div className="jumbotron">
        <p>
            <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
            <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
        </p>
        <p>
            <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
            <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
        </p>
    </div>
    ```

    Add the necessary code so that you can increment both of the counters.

    Use `componentDidMount` and `componentDidUpdate` to update the [`document.title` property](http://developer.mozilla.org/en-US/docs/Web/API/Document/title) so that the page title is always the value of both values added together (e.g. when the component loads it should be `2`, after the first click it should change to `3`)



## Tricksy

These will all require you to read the relevant JS documentation.

- Create a `<LightBox src={ blah } />` component that takes the URL of an image as a `src` prop. It should display a small version of the image. When the image is clicked it should show the image in a lightbox (e.g. full-size with a darkened background around it). When anything *other than the image* is clicked it should hide the lightbox.

    **Hint**: you might need to look at [`stopPropagation()`](http://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)


- Create a component `<Timer start={ 60 }>`. It should start at the given value and count down every second. You should use [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrworkerGlobalScope/setInterval)

    - Make sure the timer stops at 0
    - Make sure you clear the interval when the component is unmounted

- Create a component `<ThreeCounters />` using the following JSX:

    ```jsx
    <div className="jumbotron">
        <p>
            <button onClick={ this.handle1 } className="btn btn-lg btn-danger">+</button>
            <span className="alert alert-danger mr-2 ml-2">{ value1 }</span>
        </p>
        <p>
            <button onClick={ this.handle2 } className="btn btn-lg btn-success">+</button>
            <span className="alert alert-success mr-2 ml-2">{ value2 }</span>
        </p>
        <p>
            <button onClick={ this.handle3 } className="btn btn-lg btn-primary">+</button>
            <span className="alert alert-primary mr-2 ml-2">{ value3 }</span>
        </p>
    </div>
    ```

    Add the necessary code so that you can increment all of the counters.

    Use `componentDidMount` and `componentDidUpdate` along with `localStorage` so that when you refresh the page it remembers the previous values.

    **Hint**: use `JSON.stringify()` and `JSON.parse()` to store multiple values

    - [`localStorage`](http://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
    - [`JSON.stringify()`](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
    - [`JSON.parse()`](http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
