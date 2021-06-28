import { writable } from "svelte/store";

export const rooms = writable([])
export const selectedRoom = writable()
export const user = writable()