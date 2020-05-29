# Challenges

- **Use Git to make a commit every time you get an answer working. Use sensible commit messages.**

- For some of these challenges you may want to create more than one component type. Try not to let your JSX get too unwieldy. Create new directories if you're using multiple component types.

## Reducers

- Try recreating the `<Clicked>` component from the previous set of challenges using `useReducer` instead of `useState`. This would be overkill in a real app, but good practice.

    Your initial state should be:

    ```js
    const initialState = { clicked: false };
    ```

    Your action should be:

    ```js
    { type: "CLICKED" }
    ```

- Try recreating the `<StepCounter max={ 100 } step={ 5 } />` component from the previous set of challenges using `useReducer` instead of `useState`. This would be overkill in a real app, but good practice.

- Try recreating the `<TempConverter>` component from the previous set of challenges using `useReducer` instead of `useState`.


---

Now, we're going to slowly build up the functionality of a todo list app. We'll use TDD to do this.

### Setup

Our state will consist of an array, `items`, containing object literals with a `task` and `completed` property. For example:

```js
{
    items: [
        { task: "Say hello", completed: true },
        { task: "Say goodbye", completed: false },
    ]
}
```

Your react app already has testing built in, so it's fairly easy to setup.

- Create a file called `reducer.js` in `src/ToDo`
- Create another file called `reducer.test.js` in `src/ToDo`
- Add the following to `reducer.test.js`:

    ```js
    import reducer, {
        addItem,
        removeItem,
        updateItem,
        completeItem
    } from './reducer';

    const initialState = {
        items: []
    };

    it('adds items', () => {
        // Adding tests here
    });

    it('removes items', () => {
        // Removing tests here
    });

    it('updates items', () => {
        // Updating tests here
    });

    it('completes items', () => {
        // Completing tests here
    });

    it('reduces', () => {
        // Reducer tests here
    });
    ```
- To run your tests use `npm test src/ToDo/reducer.test.js`

### Challenges

- For each challenge:
    - Copy the test into `reducer.test.js`
    - Make sure you get **red** before you go for **green**
    - Make sure you `export` all your functions, so that they're available to the test file


---


#### Adding Items

Create a function `addItem` in `reducer.js`:

```js
export const addItem = (state, { value }) => {
    // … your code here
};
```

Notice that we `export` it, to make it available to the test file.

**All of the following tests should go in `reducer.test.js` inside the `it('adds items', () => { … })` block.** It should look like this when you're done (but **don't** copy it all in at once):

```js
it('adds items', () => {
    let result = addItem(initialState, { value: "Hello" });

    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items).not.toBe(initialState.items);

    result = addItem(result, { value: "Mum" });

    expect(result.items.length).toBe(2);
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});
```

1) If we pass in a `value` property, we get back a version of the state with an `items` array containing a task that has not been completed:

    ```js
    let result = addItem(initialState, { value: "Hello" });

    // first item in the items array should be a new task with "Hello"
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    ```

    Make sure you write the least code you need to for it to work. Remember, to test it when you're done.

1)  We need to make sure we're not returning the *same* array. It should be a copy:

    ```js
    // shouldn't be the same array we started with
    expect(result.items).not.toBe(initialState.items);
    ```

    This one might already go green.


1) If we take the result from before and add another item, we should get two items:

    ```js
    // passing in the previous result, which already had one item
    result = addItem(result, { value: "Mum" });

    // should be two items
    expect(result.items.length).toBe(2);
    ```

1) Let's double check they're both in there:

    ```js
    // check both items are now in items, in order given
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
    ```

    These two will probably go green straight away.


---


#### Removing Items

Create a function `removeItem` in `reducer.js` and make sure you `export` it.

**All of the following tests should go in `reducer.test.js` inside the `it('removes items', () => { … })` block.**

1) If we start with an array of items and remove the item with an `index` of `0`, then the first item in the returned array should be the "Mum" task:

    ```js
    // start with a few items
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
            { task: "How", completed: false },
            { task: "Are", completed: true },
            { task: "You", completed: false },
            { task: "Today", completed: false },
        ]
    };

    // remove item at index 0
    let removed = removeItem(many, { index: 0 });

    // "Hello" should be gone, so should get back "Mum" task
    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });
    ```

1) Make sure we're not getting the original array back:

    ```js
    // check that it's not the same object being returned
    expect(removed.items).not.toBe(many.items);
    ```

1) Make sure we're getting five items back:

    ```js
    // should be 5 items, not 6
    expect(removed.items.length).toBe(5);
    ```

1) Remove another item and make sure it still works:

    ```js
    // use the previously pruned array
    removed = removeItem(removed, { index: 2 });

    // check that the right task is now in index 2
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
    ```

**Check your `reducer.test.js` file is [looking like it's on the right track](answers/reducer.test.js)** (obviously it won't have all the tests yet)


---


#### Updating Items

Create a function `updateItem` in `reducer.js` and make sure you `export` it.

**All of the following tests should go in `reducer.test.js` inside the `it('updates items', () => { … })` block.**

1) If we update an item its `task` property should change:

    ```js
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // update an item passing the index and value
    let updated = updateItem(many, { index: 1, value: "Dad" });

    // should have updated the task property
    expect(updated.items[1]).toEqual({ task: "Dad", completed: false });
    ```

1) Make sure we're getting back a *different* object:

    ```js
    // check that it's not the same object being returned
    expect(updated.items[1]).not.toBe(many.items[1]);
    ```

1) Make sure the `completed` property *isn't* changed:

    ```js
    // update the item at index 0
    updated = updateItem(many, { index: 0, value: "Good Morning" });

    // check that the completed value is the same
    expect(updated.items[0]).toEqual({ task: "Good Morning", completed: true });
    ```

**Check your `reducer.test.js` file is [looking like it's on the right track](answers/reducer.test.js)** (obviously it still won't have all the tests yet)


---


#### Completing Items

Create a function `completeItem` in `reducer.js` and make sure you `export` it.

**All of the following tests should go in `reducer.test.js` inside the `it('completes items', () => { … })` block.**

1) It should update the `completed` property of an item:

    ```js
    let many = {
        items: [
            { task: "Hello", completed: true },
            { task: "Mum", completed: false },
        ]
    };

    // complete the item at index 1
    let completed = completeItem(many, { index: 1 });

    // expected completed to be true
    expect(completed.items[1]).toEqual({ task: "Mum", completed: true });
    ```

1) As always, check we're getting back a new object:

    ```js
    // check that it's not the same object being returned
    expect(completed.items[1]).not.toBe(many.items[1]);
    ```

1) Check completing an item doesn't affect an already completed item:

    ```js
    // complete item at index 0
    completed = completeItem(many, { index: 0 });

    // should still be marked as completed
    expect(completed.items[0]).toEqual({ task: "Hello", completed: true });
    ```

**Check your `reducer.test.js` file is [looking like it's on the right track](answers/reducer.test.js)** (obviously it still won't have all the tests yet)

---


#### Reducer

Finally, we can write the `reducer` function itself. Remember, this will be given the current state and an "action" (an object with at least a `type` property). It should **always return a valid version of the state**.

Make sure to use the functions you've already written and tested! You shouldn't need to do any array/object manipulation to get this last one working.

Create a function in `reducer.js`. We will use `export default` on this function, as it's the key bit of functionality for the file:

```js
export default (state, action) => {
    // ... your code here
};
```

**All of the following tests should go in `reducer.test.js` inside the `it('reduces', () => { … })` block.**

1) It should return the state as it was if the action `type` isn't recognised:

    ```js
    // pass in a nonsense action
    let newState = reducer(initialState, { type: "GOTTA_CATCH_EM_ALL" });

    // get back initial state
    expect(newState).toBe(initialState);
    ```

1) If the action type is `NEW_ITEM` it should add an item:

    ```js
    // use the NEW_ITEM action, passing a value
    newState = reducer(initialState, { type: "NEW_ITEM", value: "Hello" });

    // make sure it's been added
    expect(newState.items[0]).toEqual({ task: "Hello", completed: false });
    ```

1) If the action type is `REMOVE_ITEM` it should remove the item:

    ```js
    // add some more items
    newState = reducer(newState, { type: "NEW_ITEM", value: "Mum" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "How" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "Are" });
    newState = reducer(newState, { type: "NEW_ITEM", value: "You" });

    // check they've been added
    expect(newState.items.length).toBe(5);

    // remove item at index 2
    newState = reducer(newState, { type: "REMOVE_ITEM", index: 2 });

    // check index 3 has moved down to index 2
    expect(newState.items[2]).toEqual({ task: "Are", completed: false });
    ```

1) If the action type is `CHANGE_ITEM` it should update an item:

    ```js
    // update item at index 1
    newState = reducer(newState, { type: "CHANGE_ITEM", index: 1, value: "Dad" });

    // check it's been changed
    expect(newState.items[1]).toEqual({ task: "Dad", completed: false });
    ```

1) If the action type is `MARK_COMPLETED` it should update the `completed` property to be `true`:

    ```js
    // mark index 1 as completed
    newState = reducer(newState, { type: "MARK_COMPLETED", index: 1 });

    // check it's been updated
    expect(newState.items[1]).toEqual({ task: "Dad", completed: true });
    ```

**Check your `reducer.test.js` file is [looking like it's on the right track](answers/reducer.test.js)** (obviously it still won't have all the tests yet)

---

## `useReducer`

Use [`ToDo/List.js`](ToDo/List.js) for this challenge. Have a look around and make sure you understand the JSX.

Few things to note:

- The Bootstrap classes get a bit crazy for list items!
- The `<input>` is already setup as a controlled component. We'll keep track of its state separately. You *could* do it in the reducer, but it's a design choice to keep it separately.
- We're going to start off with some dummy data, to make sure things display as we expect.

We'll work through things in difficulty order, rather than the order that we created the reducer.

- Make it so that when you click on one of the remove buttons the relevant item is removed from the state. Remember, **your reducer does most of the work for you**, you just need to `dispatch` the correct action. If you remove all the items you should see a "No list items" message.

- Make it so that when you click on the text of each list item (the `<span>` with `class="flex-grow-1"`), it marks the relevant item as completed. Again, **your reducer does most of the work for you**.

- Make it so that when the form is submitted it creates a new list item with the value of `input` as its `task`. **As always, your reducer should do most the work here**.

- Update `initialState` so that you start with an empty list.

### Tricksy

- Make it so that you can update a list item when you click on the "Edit" button. It's up to you how the UX for this should work. You'll probably need some additional state to keep track of things.


---

## Tricksy Challenges

Use TDD with the `reducer` file for the following challenges. You'll need to come up with appropriate tests yourself.

1) Create a `<LameGame aim={ x }>` component. When a "Start" button is pressed it displays "{ aim } seconds" and shows a "Now" button. The idea is to click the "Now" button as close to `aim` seconds after you pressed "Start". Once you click on "Now" it should tell you how close you were in 1/10ths of a second. The "Start" and "Now" buttons should only show when relevant.
