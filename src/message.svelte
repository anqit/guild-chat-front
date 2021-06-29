<script>
    export let msg

    let author, message, timestamp
    $: {
        ({ author, message, timestamp } = msg)
    }
</script>

<div title={timestamp} >
    <p>{author} says {message}</p>
</div>