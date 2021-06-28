<script>
    import { rooms, selectedRoom } from "./store";

    const selectRoom = (id) => $selectedRoom.set(id)
</script>

<h1>Rooms</h1>
{#each $rooms as {name, id}}
    <div on:click="{() => selectRoom(id)}" class:selected="{id === $selectedRoom}">
        {name}
    </div>
{/each}

<style>
    .selected {
        background-color: #ff3e00;
        color: white;
    }
</style>