<script lang="ts">
	import { user } from './store'
	import Chat from './chat.svelte'
	import Login from './login.svelte'
</script>

{#if $user.id}
	<Chat />
{:else}
	<Login />
{/if}
