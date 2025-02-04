\connect graphile;

CREATE SCHEMA IF NOT EXISTS learning_graphile;

CREATE TABLE IF NOT EXISTS learning_graphile.todos (
    id serial PRIMARY KEY,
    description text NOT NULL,
    completed boolean NOT NULL DEFAULT false
);

COMMENT ON TABLE learning_graphile.todos IS 'A list of todos';

COMMENT ON COLUMN learning_graphile.todos.description IS 'A description of the todo';

COMMENT ON COLUMN learning_graphile.todos.completed IS 'Is the todo completed?';

COMMENT ON COLUMN learning_graphile.todos.id IS 'A unique identifier for the todo';