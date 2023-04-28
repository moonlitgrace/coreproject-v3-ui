<script lang="ts">
	import Info from '$icons/info.svelte';
	import EyeOpen from '$icons/eye_open.svelte';
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

	<form class="mt-[3vw]">
		<email-field>
			<label for="email" class="text-[1.1vw] font-semibold">Email</label>
			<!-- svelte-ignore a11y-autofocus -->
			<input
				type="email"
				id="email"
				placeholder="username@mail"
				autofocus={true}
				class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
			/>
			<info class="mt-[0.5vw] flex items-center gap-[0.5vw]">
				<Info style="width: 0.9375vw; opacity: 0.7;" />
				<span class="text-[0.75vw] text-surface-300"
					>we’ll send you a verification email, so please ensure it’s active</span
				>
			</info>
		</email-field>

		<password-field>
			<label for="password" class="mt-[1vw] text-[1.1vw] font-semibold">Password</label>
			<div class="relative flex items-center">
				<input
					type="password"
					id="password"
					placeholder="enter a strong password"
					class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
				/>
				<show-password-icons class="btn p-0 absolute right-[0.75vw] cursor-pointer text-surface-300 transition-opacity">
					<EyeOpen style="width: 1.75vw;" />
				</show-password-icons>
			</div>
		</password-field>
	</form>
</register-page>
