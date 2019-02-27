use todos;
CREATE TABLE todoList (
  todoID       INT AUTO_INCREMENT,
  todoItem 		VARCHAR(250) UNIQUE NOT NULL,
  todoDateAdded DATETIME NOT NULL,
  todoStatus	BOOLEAN NOT NULL,
  todoDueBy		DATETIME,

  PRIMARY KEY     (todoID)
);