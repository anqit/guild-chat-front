<script>
    import Message from './message.svelte'
    import { rooms, selectedRoom } from './store'

    const room = $selectedRoom && $rooms[$selectedRoom]
</script>

<div>
    {#if room && room.messages}
        {#each room.messages as msg}
            <Message message={msg} />
        {/each}
    {/if}
</div>