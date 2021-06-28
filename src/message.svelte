<script>
    export let msg

    const { author, roomId, message, timestamp } = msg
</script>

<div tooltip={timestamp} >
    <p>{message}</p>
    <p>- {author}</p>
</div>