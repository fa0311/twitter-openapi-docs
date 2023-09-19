# twitter-openapi-docs

<https://fa0311.github.io/twitter-openapi-docs/index.html>

## user vs users vs user-list

What are these strange tags?

user returns a single user, users returns a list of users, and user-list returns a list of users including `Instruction object`.
users returns a fixed number of users, whereas user-list returns a list of any number of users.

## Instruction object

What is Instruction objects?

Instruction is an object that makes up a timeline and is an array of elements of arbitrary length.
It is composed of complex Unions and is very difficult for humans to handle.
TimelineAddEntries contains a TimelineTimelineCursor, which is used to retrieve the previous and following Instructions.
