<script>
    import { onDestroy } from 'svelte'
    import Message from './message.svelte'
    import { rooms, selectedRoom } from './store'

    let room
    let unr = rooms.subscribe(rs => {
        room = rs[$selectedRoom]
    })
    let uns = selectedRoom.subscribe(s => {
        room = $rooms[s]
    })

    onDestroy(() => { unr(); uns(); })
</script>

<h1>{room ? room.name : 'Select a room to begin chatting'}</h1>
<div>
    {#if room && room.messages}
        {#each room.messages as msg}
            <Message msg={msg} />
        {:else}
            <div>Send a message to start the conversation!</div>
        {/each}
    {/if}
</div>

<style>

</style>
