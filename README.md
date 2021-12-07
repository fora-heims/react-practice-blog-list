# Making a List of Blogs

### Learning Objectives

- Use useEffect hook with a dependency array to retrieve data when a component first mounts
- Use the Supabase Javascript client to retrieve data from a database
- Use useState to manage component state
- Use the network tab to examine (and debug) the request being sent to a server and the response received from a server
- Use the async/await pattern to make our asynchronous code easier to read

### Acceptance Criteria

- A user should see a list of blog posts when they load the page
- App component should have a state variable called `blogs` that defaults to an empty array
- App component should use a `useEffect` hook to call `getBlogs` from the services layer asynchronously and then set the returned data in state
- There should be a function called `getBlogs` in the services layer which calls Supabase and returns all the columns from the `blogs` table
- App component should map through each item in `blogs` and create a `<BlogCard>` component for each blog item
- All existing Snapshot tests should pass without needing to update the snapshot

### Rubric

- [x] `blogs` state variable created using `useState` with the proper default
- [x] `useEffect` correctly calls supabase when the component is first mounted
- [x] getBlogs function in `services` folder calls Supabase and retrieves the list of blog posts
- [x] Supabase code is isolated to the services
- [x] each blog is correctly rendered using the `BlogCard` component

Stretch Goals
- [x] Update the BlogCard to include the author's name (you'll need to update the snapshot test when you're done)
