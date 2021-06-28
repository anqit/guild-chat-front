<script>
    import Message from './message.svelte'
    import { rooms, selectedRoom } from './store'

    const room = $rooms.find(r => r.id === $selectedRoom)
    console.log("room info")
    console.log($rooms, $selectedRoom, room)
</script>

<h1>{$room ? $room.name : 'Select a room to begin chatting'}</h1>
<div>
    {#if room}
        {#each room.messages as msg}
            <Message message={msg} />
        {:else}
            <div>Start the conversation!</div>
        {/each}
    {/if}
</div>

<style>

</style>