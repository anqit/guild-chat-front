<script>
    import { rooms, selectedRoom, socket } from './store'

    const selectRoom = (id) => $selectedRoom = id

    let newRoomName = ''
    const createRoom = () => {
        if (newRoomName.length) {
            $socket.send(JSON.stringify(["create_room", { name: newRoomName }]))
            newRoomName = ''
        }
    }
</script>

<h1>Rooms</h1>
{#each $rooms as {name, id}}
    <div on:click="{() => selectRoom(id)}" class:selected="{id === $selectedRoom}" class="room">
        {name}
    </div>
{/each}
<div>
    <input type="text" placeholder="new room" bind:value={newRoomName} />
    <button on:click={createRoom} disabled={newRoomName.length == 0}>+</button>
</div>

<style>
    .selected {
        background-color: #ff3e00;
        color: white;
    }
    .room {
        cursor: pointer;
    }
</style>