# Challenges

**Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

Make sure you keep the JS console open at all times and correct anything that it flags up.

## Props

- Update your `<Header>` component so that it can accept a `text` prop, which it will display between the `<h1>` tags

- Update your `<Paragraph>` component so that it can accept a `message` prop, which it will display between the `<p>` tags. If no `message` is provided it should just display "Hello, world".

- Update your `<Square>` component so that it can accept a `colour` prop, which will change the background colour of the square. Also add a default value for `colour`.

- Update your `<People>` component so that it can accept an array of names with a `names` prop. If no names are passed in it should display a paragraph saying: "Nothing to see here"

- Update your `<Stuff>` component so that it can accept a `square` prop, which will determine whether the `<Square>` component is displayed or not. This prop should default to `true`.


## Children

- Update your `<Header>` component so that it uses `children` instead of the `text` prop

- Update your `<Paragraph>` component so that it uses `children` instead of the `message` prop


## Tricksy

- Create a `<Basket items={ items }>` component. It should display a table of `items` using a `<BasketItem price={ item.price } name={ item.name }>` sub-component.

    ```js
    let items = [
        { name: "Coffee", price: 2.10 },
        { name: "Bananas", price: 3.50 },
        { name: "Milk", price: 250.65 },
        { name: "The Great Milk Shortage by Simon Schama", price: 12.99 },
    ];
    ```

- Create a `<FadeIn time="500ms">Hello</FadeIn>` component. It should fade in whatever it is given as children. Try wrapping your entire `App` component with it once you've got it working. You'll want to use CSS animations.
