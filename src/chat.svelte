<script>
    import RoomLibrary from './roomLibrary.svelte'
    import Room from './room.svelte'
    import MessageInput from './messageInput.svelte'
</script>

<table style="width: available">
    <tr>
        <td>
            <RoomLibrary />
        </td>
        <td class="wide">
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
        position: relative;
    }
    .wide {
        width: 1000px;
    }
</style>