# Practice: Finding Information Based on Parameters (Recall)

In this short practice, you will apply your existing knowledge to complete the
`SingleArticle` component.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page and `cd` into the root directory.

1. Run `npm install` to load all the dependencies.
2. Run `npm start` to start the server and run your app `localhost:3000`.

## Using parameters and passing state to component

In __src/components/SingleArticle/index.js__, use the parameter given in the URL
to choose the correct article from the `articles` array. (How can you access
the parameter?) Display the information for that article inside the JSX,
replacing the hard-coded information.

Choose one of the following options for passing the state into the
`SingleArticle` component:

1. Pass the articles from the `ArticleList` component to the `SingleArticle`
   component
2. Use `useSelector` to load the articles directly from the reducer

When you've finished, you should be able to see the individual articles as you
click on their respective titles in the "Article List".

## What you have learned

**Congratulations!** In this practice you have applied your previous knowledge
to

1. Display information in JSX based on a URL parameter.