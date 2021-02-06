To do...

- ~~ Write an about me section ~~
- ~~ Write a contact Section ~~
- ~~ Update to latest React ~~
- Mobile Optimise
  - Menu bar needs to go top
- Seperate css
- Can I move active meny state inititations into Menu.js?

To Fix...

- ~~ Album open stutters ~~
- ~~ Album Filter line visible ~~
- Photos should disappear when tabs besides filter are open

Ian's Notes

- ~~ You should do some customization to remove some of the Create React App branding. For example, create your own README file. Doesn't need to be anything detailed, just talk about what the site is and maybe the tech stack it's built on. The index.html is another place where you should update the title, meta description, favicon, and remove any excess things you don't need. ~~

- ~~ The conditional logic in the handleClick function can be made more concise. One way to do it would be to combine the 4 pieces of show state into one. You can have a single string representing the active tab. ~~

- ~~ Another thing in the handleClick function is that it's a code smell to be using DOM methods in React (e.g. getElementById, getElementsByClassName). The React way would be to use refs. ~~
