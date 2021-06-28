import {readable, writable} from "svelte/store";

export const rooms = writable([])
export const selectedRoom = writable(-1)
export const user = writable()

export const socket = readable(null, set => {
    const s = new WebSocket(`ws://${process.env.API_ENDPOINT}/chat`)
    s.onopen = () => s.send(JSON.stringify(["get_rooms", {}]))

    s.onmessage = (event) => {
        const [action, params] = JSON.parse(event.data)
        switch(action) {
            case "rooms_retrieved":
                rooms.set(params)
                selectedRoom.set(params[0].id)
                break
            case "room_created":
                rooms.update(r => [...r, params])
                // selectedRoom.set(params.id)
                break;
            case "message_sent":
                break;
            case "error":
                break;
        }
    }
    set(s)

    return () => s.close()
})