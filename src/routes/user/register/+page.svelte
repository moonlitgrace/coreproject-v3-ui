<script lang="ts">
	import Info from '$icons/info.svelte';
	import EyeOpen from '$icons/eye_open.svelte';
	import EyeClose from '$icons/eye_close.svelte';
	import Cross from '$icons/cross.svelte';
	import ArrowUpRight from '$icons/arrow_up_right.svelte';

	let show_password = false;
	$: password_type = show_password ? 'text' : 'password';
</script>

<svelte:head>
	<title>Register | AnimeCore</title>
</svelte:head>

<register-page class="flex flex-col justify-between h-full">

	<form-section>
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

		<form class="mt-[1.5vw]">
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
				<label for="password" class="mt-[1.5vw] text-[1.1vw] font-semibold">Password</label>
				<div>
					<div class="relative flex items-center">
						<input
							type={password_type}
							id="password"
							placeholder="enter a strong password"
							class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
						/>
						<show-password-icons
							on:mousedown={() => (show_password = !show_password)}
							class="btn absolute right-[0.75vw] cursor-pointer p-0 text-surface-300 transition-opacity"
						>
							<svelte:component
								this={show_password ? EyeClose : EyeOpen}
								style={show_password ? 'width: 1.4vw;' : 'width: 1.75vw;'}
							/>
						</show-password-icons>
					</div>
					<password-strength class="flex flex-col mt-[1vw]">
						<div class="flex gap-[0.75vw]">
							{#each Array(4) as _}
								<span
									class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50/50 transition duration-300"
								/>
							{/each}
						</div>

						<div class="mt-[1vw]">
							<span class="uppercase tracking-wider mt-[1vw] text-surface-50 text-[1vw] font-semibold">must contain</span>

							<div class="mt-[0.4vw] ml-[0.75vw] flex flex-col gap-[0.1vw]">
								<div class="flex items-center gap-[0.75vw]">
									<Cross style="width: 0.9vw; color: indianred; opacity: 0.9;" />
									<span class="text-[0.8vw] text-surface-300">minimum 8 characters</span>
								</div>
								<div class="flex items-center gap-[0.75vw]">
									<Cross style="width: 0.9vw; color: indianred; opacity: 0.9;" />
									<span class="text-[0.8vw] text-surface-300">minimum 1 number</span>
								</div>
								<div class="flex items-center gap-[0.75vw]">
									<Cross style="width: 0.9vw; color: indianred; opacity: 0.9;" />
									<span class="text-[0.8vw] text-surface-300">minimum 1 special character</span>
								</div>
								<div class="flex items-center gap-[0.75vw]">
									<Cross style="width: 0.9vw; color: indianred; opacity: 0.9;" />
									<span class="text-[0.8vw] text-surface-300">minimum 1 lower-case or upper-case character</span>
								</div>
							</div>
						</div>
					</password-strength>
				</div>
			</password-field>

			<confirm-password-field>
				<label for="confirm-password" class="mt-[1.5vw] text-[1.1vw] font-semibold">Confirm Password</label>
				<div>
					<div class="relative flex items-center">
						<input
							type={password_type}
							id="password"
							placeholder="re-enter your password"
							class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
						/>
						<show-password-icons
							on:mousedown={() => (show_password = !show_password)}
							class="btn absolute right-[0.75vw] cursor-pointer p-0 text-surface-300 transition-opacity"
						>
							<svelte:component
								this={show_password ? EyeClose : EyeOpen}
								style={show_password ? 'width: 1.4vw;' : 'width: 1.75vw;'}
							/>
						</show-password-icons>
					</div>
				</div>
			</confirm-password-field>
		</form>
	</form-section>

	<div class="mt-[2vw] flex items-center justify-between">
		<div class="flex flex-col">
			<span class="text-[0.75vw] text-surface-100">Already have an account?</span>
			<a href="/user/login" class="text-[1.1vw]">Login</a>
		</div>
		<button class="btn p-0 h-[2.75vw] px-[1.25vw] rounded-[0.5vw] bg-secondary-800 text-[0.95vw] font-semibold">
			<span>Continue</span>
			<ArrowUpRight style="width: 1vw; transform: rotate(45deg);" />
		</button>
	</div>
</register-page>
