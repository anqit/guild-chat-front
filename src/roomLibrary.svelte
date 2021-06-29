<script>
    import { rooms, selectedRoom, socket } from './store'

    const selectRoom = (id) => {
        $selectedRoom = id
    }

    let newRoomName = ''
    const createRoom = () => {
        if (newRoomName.length) {
            $socket.send(JSON.stringify(["create_room", { name: newRoomName }]))
            newRoomName = ''
        }
    }
</script>

<h1>Rooms</h1>
{#each Object.values($rooms) as { name, id }}
    <div on:click="{() => selectRoom(id)}" class:selected="{id === $selectedRoom}" class="room">
        {name}
    </div>
{/each}

<div>
    <form on:submit|preventDefault={createRoom}>
        <input type="text" placeholder="new room" bind:value={newRoomName} />
        <input type="submit" disabled={newRoomName.length === 0} value = '+' />
    </form>
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
