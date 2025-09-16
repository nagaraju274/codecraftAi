// This directive marks this component as a Client Component.
"use client"

// Inspired by react-hot-toast library
// Import React and its types.
import * as React from "react"

// Import toast component types.
import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

// The maximum number of toasts to display at once.
const TOAST_LIMIT = 1
// The delay in milliseconds before a toast is removed from the DOM after being dismissed.
const TOAST_REMOVE_DELAY = 1000000

// Define the type for a toast object that the toaster will manage.
type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

// Define the types of actions that can be dispatched to the reducer.
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

// A simple counter to generate unique IDs for toasts.
let count = 0

// Function to generate a new unique ID.
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

// Get the type of the action types object.
type ActionType = typeof actionTypes

// Define the possible shapes of an action object.
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

// Define the shape of the state managed by the reducer.
interface State {
  toasts: ToasterToast[]
}

// A map to store timeouts for removing toasts.
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

// Function to schedule a toast for removal from the DOM.
const addToRemoveQueue = (toastId: string) => {
  // If a timeout already exists for this toast, do nothing.
  if (toastTimeouts.has(toastId)) {
    return
  }

  // Set a timeout to dispatch a REMOVE_TOAST action.
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  // Store the timeout ID.
  toastTimeouts.set(toastId, timeout)
}

// The reducer function that handles state changes based on actions.
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    // Add a new toast to the state.
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    // Update an existing toast.
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    // Dismiss a toast, making it invisible.
    case "DISMISS_TOAST": {
      const { toastId } = action

      // Schedule the toast for removal from the DOM.
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    // Remove a toast from the state completely.
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

// An array of listener functions to be called when the state changes.
const listeners: Array<(state: State) => void> = []

// The global state object.
let memoryState: State = { toasts: [] }

// The dispatch function that updates the state and notifies listeners.
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

// The type for a toast object that can be passed to the toast function.
type Toast = Omit<ToasterToast, "id">

// The main function to create and show a toast.
function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Dispatch an action to add the new toast.
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  // Return methods to control the toast.
  return {
    id: id,
    dismiss,
    update,
  }
}

// The custom hook that components will use to interact with the toaster.
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  // Subscribe to state changes.
  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  // Return the current state and the toast/dismiss functions.
  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

// Export the hook and the toast function.
export { useToast, toast }
