import {readable, writable} from "svelte/store";

export const rooms = writable({})
export const selectedRoom = writable(-1)
export const user = writable({})

export const socket = readable(null, set => {
    const s = new WebSocket(`ws://${process.env.API_ENDPOINT}/chat`)
    s.onopen = () => s.send(JSON.stringify(["get_rooms", {}]))

    s.onmessage = (event) => {
        const [action, params] = JSON.parse(event.data)
        switch(action) {
            case "rooms_retrieved":
                params.length && rooms.set(params.reduce((map, r) => ({ ...map, [r.id]: r }), {}))
                // params[0] && selectedRoom.set(params[0].id)
                break
            case "room_created":
                rooms.update(rs => ({ ...rs, [params.id]: params }))
                // selectedRoom.set(params.id)
                break
            case "message_sent":
                const { roomId } = params
                rooms.update(rs => {
                    const copy = { ...rs }
                    const room = copy[roomId]

                    if(room) {
                        room.messages.push(params)
                        copy[roomId] = room
                    }

                    return copy
                })

                break
            case "error":
                console.log("ERROR", params)
                break
        }
    }
    set(s)

    return () => s.close()
})
