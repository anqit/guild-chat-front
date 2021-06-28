<script>
    import RoomLibrary from './roomLibrary.svelte'
    import Room from './room.svelte'
    import MessageInput from './messageInput.svelte'

    // import { rooms, socket } from './store'

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
    td {
        border-collapse: collapse;
        border: thin solid aquamarine;
        vertical-align: top;
    }
</style>