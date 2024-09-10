# Frontend Exercise

## Data

https://jsonplaceholder.typicode.com/posts

Fetch data from the endpoint above.

The endpoint contains a list of posts, every post have:

- id
- title
- body
- userId

## Layout

Create the layout with the current elements according with this [Figma](https://www.figma.com/file/kXGIsuHXguwLpSrTQj2CiW/Frontend-Interview-%28Copy%29?type=design&t=z260m3VOICIw1O9D-6) layout.

Display the list of users id in a sidebar on left. The sidebar must fill the height of the viewport.

Each element of users list, must be clickable.

On click of each user id element, display the list of post title related to the clicked user Id

Display the list of posts on the right.

Each post element must show the title and the body. The body on one line and could be truncated using three dots at the end.

Each title and body block on each line, must have the same height.

On top of the posts list, display a search input.

If the user scrolls down the posts list, the search input must remain visible on the top.

All the markup must respect the basic principles of accessibility.
