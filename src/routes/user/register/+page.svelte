<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';

	export let data: any;

	let password_requirements = [
		{ text: 'minimum 8 characters', valid: false },
		{ text: 'minimum 1 number', valid: false },
		{ text: 'minimum 1 special character', valid: false },
		{ text: 'minimum 1 lower-case or upper-case character', valid: false }
	];

	// Client API:
	const { form, errors, enhance } = superForm(data.form, {
		validationMethod: 'oninput',
		validators: {
			email: (email) => {
				const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for validating email format
				return regex.test(email) ? null : 'Please enter a valid email address';
			},
			password: (password) => {
				validate_password(password);
				return password;
			}
		}
	});

	function validate_password(password: string) {
		// Check minimum length requirement
		if (password.length < 8) {
			password_requirements[0].valid = false;
		} else {
			password_requirements[0].valid = true;
		}

		// Check for at least 1 number
		if (!/(?=.*\d)/.test(password)) {
			password_requirements[1].valid = false;
		} else {
			password_requirements[1].valid = true;
		}

		// Check for at least 1 special character
		if (!/(?=.*[!@#$%^&*()_+|~\-=?;:'",.<>{}[\]\\/])/.test(password)) {
			password_requirements[2].valid = false;
		} else {
			password_requirements[2].valid = true;
		}

		// Check for at least 1 lowercase or uppercase character
		if (!/(?=.*[a-zA-Z])/.test(password)) {
			password_requirements[3].valid = false;
		} else {
			password_requirements[3].valid = true;
		}

		// Return true if all requirements are met, false otherwise
		return password_requirements.every((requirement) => requirement.valid);
	}

	import Info from '$icons/info.svelte';
	import Cross from '$icons/cross.svelte';
	import ArrowUpRight from '$icons/arrow_up_right.svelte';
	import Tick from '$icons/tick.svelte';
</script>

<svelte:head>
	<title>Register | AnimeCore</title>
</svelte:head>

<register-page>
	<span class="flex hidden text-[1.25vw] font-bold uppercase tracking-wider text-white/95">
		create your&nbsp
		<div class="flex">
			<span class="text-surface-50">c</span>
			<span class="text-warning-400">o</span>
			<span class="text-surface-50">r</span>
			<span class="text-surface-50">e</span>
		</div>
		&nbspaccount
	</span>

	<form class="flex h-full flex-col justify-between py-[1.5vw]" method="POST" use:enhance>
		<form-fields>
			<email-field>
				<label for="email" class="text-[1.1vw] font-semibold">Email</label>
				<!-- svelte-ignore a11y-autofocus -->
				<input
					bind:value={$form.email}
					type="email"
					name="email"
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
				{#if $errors.email}<span class="text-[1vw] text-error-50">{$errors.email}</span>{/if}
			</email-field>

			<password-field>
				<label for="password" class="mt-[1.5vw] text-[1.1vw] font-semibold">Password</label>
				<div>
					<div class="relative flex flex-col">
						<input
							bind:value={$form.password}
							type="text"
							id="password"
							name="password"
							placeholder="enter a strong password"
							class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
						/>
					</div>
					<password-strength class="mt-[1vw] flex flex-col">
						<div class="flex gap-[0.75vw]">
							{#each Array(4) as _}
								<span
									class="h-[0.625vw] w-[6.25vw] rounded-[0.1875vw] border-[0.2vw] border-surface-50/50 transition duration-300"
								/>
							{/each}
						</div>

						<div class="mt-[1vw]">
							<span
								class="mt-[1vw] text-[1vw] font-semibold uppercase tracking-wider text-surface-50"
								>must contain</span
							>
							<div class="ml-[0.75vw] mt-[0.4vw] flex w-3/5 flex-col gap-[0.1vw]">
								{#each password_requirements as requirement}
									<div class="grid grid-cols-12 items-center">
										<svelte:component
											this={requirement.valid ? Tick : Cross}
											class="col-span-1"
											style={requirement.valid
												? 'width: 0.7vw; color: deepskyblue; opacity: 0.9;'
												: 'width: 0.9vw; color: red; opacity: 0.8;'}
										/>
										<span class="col-span-11 text-[0.8vw] text-surface-300">{requirement.text}</span
										>
									</div>
								{/each}
							</div>
						</div>
					</password-strength>
				</div>
			</password-field>

			<confirm-password-field>
				<label for="confirm-password" class="mt-[1.5vw] text-[1.1vw] font-semibold"
					>Confirm Password</label
				>
				<div>
					<div class="relative flex items-center">
						<input
							bind:value={$form.confirm_password}
							type="password"
							id="password"
							name="confirm_password"
							placeholder="re-enter your password"
							class="mt-[0.25vw] h-[3.125vw] w-full rounded-[0.75vw] border-[0.2vw] border-primary-500 bg-transparent pl-[1vw] text-[1.1vw] font-medium outline-none !ring-0 transition-all placeholder:text-white/50 focus:border-primary-400"
						/>
						{#if $errors.confirm_password}<span class="text-[1vw] text-error-50"
								>{$errors.confirm_password}</span
							>{/if}
					</div>
				</div>
			</confirm-password-field>
		</form-fields>

		<div class="flex items-center justify-between">
			<div class="flex flex-col">
				<span class="text-[0.75vw] text-surface-100">Already have an account?</span>
				<a href="/user/login" class="text-[1.1vw]">Login</a>
			</div>
			<button
				class="btn h-[2.75vw] rounded-[0.5vw] bg-secondary-800 p-0 px-[1.25vw] text-[0.95vw] font-semibold"
			>
				<span>Continue</span>
				<ArrowUpRight style="width: 1vw; transform: rotate(45deg);" />
			</button>
		</div>
	</form>
</register-page>
