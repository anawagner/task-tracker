# Task Tracker

<!-- https://www.theodinproject.com/lessons/node-path-javascript-todo-list -->

<!-- Make the lists rearangable  -->
<!-- https://www.youtube.com/watch?v=jfYWwQrtzzY -->

## Steps / Requirements

Design Task data  - 
- title
- description
- due date
- priority
- project
- status
- created date 

Views: 
by project
by due date 
due this week (next sevent days)
<!-- https://app.any.do/tasks/next-seven-days -->
be able to drag task to the next day and change the date of the taks
by priority
by status

list views vs board views 

upcoming tasks, due today, overdue tasks
recently completed tasks

allow drag and drop to rearange order 
allow checkbox to check off item to mark as done 
completed tasks should be moved to a completed section

easy to add new tasks with a plus button
easy to add details to tasks 
easy to edit tasks (click to edit details, but edit some items from the list view)
easy to add projects 
delete tasks from list view and from details view

show and hide filters, view menu 
light and dark themes with toggle 
or use system settings 

mobile and desktop views

stretch goals:
add users
add comments
assign users to tasks 
and show tasks assigned to user, filter by user "my tasks"
add tags to tasks
add subtasks to tasks (check list within a task)
<!-- 
inspiration
https://clarasmyth.github.io/todo-list/ 
https://bscottnz.github.io/todo/
https://shozuu.github.io/todo-list/
-->

# deployment steps

1. make a gh-pages branch

   ```bash
   git checkout -b gh-pages
   ```

2. merge the gh-pages branch with the main branch

   ```bash
   git merge main --no-edit
   ```

3. push the dist folder to the gh-pages branch

   ```bash
   git add dist -f
   git commit -m "deploy"
   git subtree push --prefix dist origin gh-pages
   ```

4. go to the github repository settings and change the source branch to gh-pages
