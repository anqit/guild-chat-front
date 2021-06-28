<script>
    import RoomLibrary from './roomLibrary.svelte'
    import Room from './room.svelte'
    import MessageInput from './messageInput.svelte'

    console.log('in CHAT')

    const socket = new WebSocket(`ws://${process.env.API_ENDPOINT}/chat`)
    socket.onopen = () => socket.send(["get_rooms"])

    socket.onmessage = (event) => {
        console.log(event)
        console.log(JSON.stringify(event, null, 2))
    }
</script>

<table>
    <tr>
        <td>
            <RoomLibrary />
        </td>
        <td>
            <Room />
            <MessageInput />
        </td>
    </tr>
</table>

<style>
    table {
        border-collapse: collapse;
        border: thin solid aquamarine;
    }
</style>