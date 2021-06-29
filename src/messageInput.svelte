<script>
    import { selectedRoom, user, socket } from "./store";

    let message = ''

    const submitMessage = () => {
        if (message.length) {
            $socket.send(JSON.stringify(
                ["send_message", { roomId: $selectedRoom, author: $user.name, message }]
            ))
            message = ''
        }
    }
</script>

<div>
    <form id on:submit|preventDefault={submitMessage}>
        <input type="text" bind:value={message}
               disabled={$selectedRoom === -1}
               placeholder={$selectedRoom === -1 ? 'select a room to chat' : 'what\'s on your mind?'}/>
        <input type="submit" disabled={message.length === 0 || $selectedRoom === -1} value="Send >">
    </form>
</div>

<style>
    div {
        position: absolute;
        bottom: 0;
    }
</style>
