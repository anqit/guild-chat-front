<script>
    export let msg

    const { author, message, timestamp } = msg
</script>

<div tooltip={timestamp} >
    <p>{author} says {message}</p>
</div>