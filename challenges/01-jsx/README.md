# Challenges

**Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

Make sure you keep the JS console open at all times and correct anything that it flags up.

To create your app run: `npm init react-app your-project-name`
- Run this in the directory you want your react app to live
- A good rule of thumb is to use hyphens and lower case for your project name
- Do NOT use keywords which might be used elsewhere e.g react

To connect your git repo for these challenge to the react app:
- Create an *empty* repo on github (do not create one with a README.md)
- Change directory into your react app
- Run `git init`
- Set the upstream origin to be the repo you've created by running:
    ```
    git remote add origin https://github.com/USERNAME/REPOSITORY.git
    git push -u origin master
    ```

## JSX

- Create a component `<Header>` that displays: `<h1>Hello, world</h1>`

- Create a component `<Paragraph>` that displays: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos.</p>`

- Create a component `<Square>` that displays a square `<div>` that is 200×200px and has a red background. You'll need to look at the React docs and how to use the [`style` attribute](http://reactjs.org/docs/dom-elements.html#style).

- Create a component `<People>` that displays a list of names in a `<ul>`. The names should comes from an array.

    ```jsx
    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    // your component here
    ```

- Create a component `<Stuff>` that includes all of the components so far and then use it in your `<App>` component:

    ```jsx
    <React.Fragment>
        <Header />
        <Paragraph />
        <Square />
        <People />
    </React.Fragment>
    ```

## Tricksy

- Recreate [`appify-me.html`](https://develop-me.github.io/bootcamp--week-09--react/challenges/01-jsx/appify-me.html) using JSX components. Break the different sections of the site up into small components so that they don't become unmanageable - but don't get **too** carried away.
