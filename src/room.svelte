<script>
    import { onDestroy, onMount } from 'svelte'
    import Message from './message.svelte'
    import { rooms, selectedRoom } from './store'

    let room
    onMount(() => room = $rooms.find(r => r.id === $selectedRoom))
    // let room, un
    // onMount(() => {
    //     un = selectedRoom.subscribe(s => {
    //         console.log('in sub', s, $rooms)
    //         room = $rooms.find(r => r.id === s)
    //     })
    //     console.log("room info")
    //     console.log($rooms, $selectedRoom, room)
    // })
    //
    // onDestroy(un)
</script>

<h1>{room ? room.name : 'Select a room to begin chatting'}</h1>
<div>
    {#if room && room.messages}
        {#each room.messages as msg}
            <Message message={msg} />
        {:else}
            <div>Send a message to start the conversation!</div>
        {/each}
    {/if}
</div>

<style>

</style>
