<script lang="ts">
</script>

<svelte:head>
	<title>Register | AnimeCore</title>
</svelte:head>

<register-page>
	<span class="flex text-[1.25vw] font-bold uppercase tracking-wider text-white/95">
		create your&nbsp
		<div class="flex">
			<span class="text-surface-50">c</span>
			<span class="text-warning-400">o</span>
			<span class="text-surface-50">r</span>
			<span class="text-surface-50">e</span>
		</div>
		&nbspaccount
	</span>

	<form class="mt-[3.4375vw]">
		<div>
			<label for="email" class="text-[1.1vw] font-semibold">Email</label>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="email"
				id="email"
				placeholder="username@mail"
				autofocus={true}
				class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
			/>
		</div>
	</form>
</register-page>
