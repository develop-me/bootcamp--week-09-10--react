# Day 1

**This week is just a continuation of the previous week's material**

**You're probably yearning to make more complex apps, but shouldn't until we learn about state management**

## Morning

### Lifting State

- Creating a toggle button: own state, but no way of knowing about each other (`Button.js`)
- Lift state into the parent
- Assign each button a number
- Pass a function for click handler


**Challenges**: `challenges/01-one-way-data-flow/01-lifting-state/README.md`

---

## Afternoon

### Passing Data Up

- Update `Counter` with submit button (see `Counter.js`)
- Can get value out by passing it up with a function call
- Can only happen on an event inside the child component


**Challenges**: `challenges/01-one-way-data-flow/02-passing-data-up/README.md`
