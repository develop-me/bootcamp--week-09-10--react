import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

let initial = {
    items: []
};

it('adds items', () => {
    let result = addItem(initial, { value: "Hello" });

    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items).not.toBe(initial.items);

    result = addItem(result, { value: "Mum" });

    expect(result.items.length).toBe(2);
    expect(result.items[0]).toEqual({ task: "Hello", completed: false });
    expect(result.items[1]).toEqual({ task: "Mum", completed: false });
});

it('removes items', () => {
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

    let removed = removeItem(many, { index: 0 });

    expect(removed.items[0]).toEqual({ task: "Mum", completed: false });
    expect(removed.items).not.toBe(many.items);
    expect(removed.items.length).toBe(5);

    removed = removeItem(removed, { index: 2 });
    expect(removed.items[2]).toEqual({ task: "You", completed: false });
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
