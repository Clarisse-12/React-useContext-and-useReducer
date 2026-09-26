/* Task Reducer */

type Task = {
  id: number;
  text: string;
};

type State = Task[];

type Action =
  | { type: "add"; payload: string }
  | { type: "remove"; payload: number };

  // The taskReducer function takes the current state and an action as arguments and returns a new state based on the action type. It handles two action types: "add" and "remove". When the action type is "add", it creates a new task with a unique id and the provided text, and returns a new state array with the new task added. When the action type is "remove", it filters out the task with the specified id from the state array and returns the updated state. If an unknown action type is provided, it throws an error.

export function taskReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
        return [...state, { id: Date.now(), text: action.payload }];
    case "remove":
        return state.filter((task) => task.id !== action.payload);
    default:
        throw new Error("Unknown action type");

    }
}