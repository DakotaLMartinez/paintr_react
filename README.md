# Paintr App

## Refactoring to interact with Sinatra API

Currently, the react code works by importing the data from another file within the project. We'll want to rework that code so that it pulls the data from our Sinatra API instead. In this repo, you'll have 3 main adjustments to focus on.

1. Rework `PaintingsList.js` so that you `fetch` paintings from Sinatra API instead of importing.
2. Add `fetch` to the `handleSubmit` event handler within `PaintingForm.js` so that the painting is created in the backend.
3. Add `fetch` to the `addVotes()` functionality in `Painting.js` so that the upvote is persisted to the painting in the database.