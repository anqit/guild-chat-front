<script>
    import { user } from './store'
    import api from './api'

    let newUser = ''
    const submit = async () => {
        const { name } = await api.createUser(newUser)
        user.set(name)
    }
</script>

<h1>Who are you?</h1>
<input type="text" placeholder="what's your name?" bind:value={newUser} />
<button on:click="{submit}" >Let's Talk!</button>
