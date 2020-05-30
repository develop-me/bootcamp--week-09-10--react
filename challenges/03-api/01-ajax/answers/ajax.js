import axios from "./axios";

// 1) Use `console.log()` to output an array with all of your article data from the API:

axios.get("/articles").then(({data}) => console.log(data.data));


// 2) Create a new article using axios and then `console.log()` its ID

axios.post("/articles", {
    title: "The debate continues",
    content: "Spoons probably exist",
    tags: ["spoons" ,"science"],
}).then(({data}) => console.log(data.data.id));


// 3) Fetch one of your articles from the API and `console.log()` it:

axios.get("/articles/48").then(({data}) => console.log(data.data));


// 4) Add a new tag to one of your articles and `console.log()` the tags array from the response:

axios.put("/articles/48", {
    title: "The debate continues",
    content: "Spoons probably exist",
    tags: ["spoons" ,"science", ,"spoon truther"],
}).then(({data}) => console.log(data.data.tags));


// 5) Delete an article and `console.log()` "Deleted" once you get back a response

axios.delete("/articles/48").then(({data}) => console.log("Deleted"));


// 6) Add a comment to an article using axios and `console.log()` its ID

axios.post("/articles/12/comments", {
    email: "bob@bob.com",
    comment: "I am a spoon!",
}).then(({data}) => console.log(data.data.id));


// 7) Use `console.log()` to list all of the comments for one of your articles

axios.get("/articles/12/comments").then(({data}) => console.log(data.data));


// 8) Use `console.log()` to output a list of all the tags

axios.get("/tags").then(({data}) => console.log(data.data));



// ## Tricksy

// 1) Try fetching an article with an ID that doesn't exist and `console.log()` "Not found" when it fails

axios.get("/articles/29893").then(() => console.log("Done"), () => console.log("Not found"));

// 2) Using `console.log()` output an array of *just* the titles of all the articles

axios.get("/articles").then(({data}) => data.data.map(article => article.title));


// ## Über-Tricksy
//
// 1) Use [`console.table()`](https://developer.mozilla.org/en-US/docs/Web/API/Console/table) to output a frequency table for how often a tag is used

axios.get("/articles").then(({data}) => {
    // get a flat array of tags
    let tags = data.data.flatMap(article => article.tags);

    // build up frequency table
    let result = tags.reduce((ob, tag) => {
        // create new key if doesn't exist
        if (!ob[tag]) {
            ob[tag] = 0;
        }

        // increment count
        ob[tag] += 1;

        return ob;
    }, {});

    console.table(result);
});
