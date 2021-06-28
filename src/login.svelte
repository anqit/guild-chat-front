<script>
    import { user } from './store'
    import api from './api'

    let name = ''
    const submit = async () => {
        const u = await api.createUser(name)
        $user = u
    }
</script>

<h1>Who are you?</h1>
<form on:submit|preventDefault={submit}>
    <input type="text" placeholder="what's your name?" bind:value={name} />
    <input type="submit" disabled={name.length === 0} value="Let's Talk!" />
</form>
