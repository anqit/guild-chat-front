<script lang="ts">
	import { user } from './store'
	import Chat from './chat.svelte'
	import Login from './login.svelte'
</script>

{#if $user}
	<Chat />
{:else}
	<Login />
{/if}

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>