<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.scss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.scss';
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';

	import { blur } from 'svelte/transition';

	// import icons
	import AnimeCore from '$icons/AnimeCore.svelte';
	import Logo from '$icons/Logo.svelte';
	import Search from '$icons/Search.svelte';
	import Home from '$icons/Home.svelte';
	import Explore from '$icons/Explore.svelte';
	import List from '$icons/List.svelte';
	import Schedule from '$icons/Schedule.svelte';
	import Forum from '$icons/Forum.svelte';
	import Settings from '$icons/Settings.svelte';
	import Misc from '$icons/Misc.svelte';

	// Local
	let active_button:
		| keyof typeof icon_mapping.top
		| keyof typeof icon_mapping.middle
		| keyof typeof icon_mapping.bottom = 'home';

	const icon_mapping = {
		top: {
			search: {
				icon: {
					component: Search,
					width: '1.25vw',
					height: '1.25vw',
					color: 'black'
				}
			}
		},
		middle: {
			home: {
				icon: {
					component: Home,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			},

			discover: {
				icon: {
					component: Explore,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			},
			list: {
				icon: {
					component: List,
					width: '1.7vw',
					height: '1.7vw',
					color: 'white'
				}
			},
			schedule: {
				icon: {
					component: Schedule,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			},
			forum: {
				icon: {
					component: Forum,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			}
		},
		bottom: {
			settings: {
				icon: {
					component: Settings,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			},
			'misc.': {
				icon: {
					component: Misc,
					width: '1.25vw',
					height: '1.25vw',
					color: 'white'
				}
			}
		}
	};

	async function middle_section_click(item: string) {
		active_button = item as typeof active_button;
	}
</script>

<div class="h-screen">
	<AppShell>
		<svelte:fragment slot="header">
			<div class="md:h-18 flex items-center justify-between px-[2.1vw] py-[0.9375vw]">
				<a href="/">
					<Logo width="2vw" />
				</a>

				<a href="/">
					<AnimeCore width="10vw" />
				</a>

				<Avatar
					rounded="rounded-[0.375vw]"
					width="w-[3.125vw]"
					cursor="cursor-pointer"
					src="https://i.pinimg.com/236x/ab/71/15/ab7115dcb42174aa79981bc219993b6d.jpg"
					initials="JD"
				/>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="flex h-full flex-col justify-between py-[2vw] md:w-[6.25vw]">
				<div class="flex flex-col items-center gap-5">
					{#each Object.entries(icon_mapping.top) as item}
						{@const item_icon = item[1].icon}
						<button
							type="button"
							class="btn-icon bg-warning-400 p-0 md:w-[2.5vw] md:rounded-[0.375vw]"
						>
							<svelte:component
								this={item_icon.component}
								height={item_icon.height}
								width={item_icon.width}
								color={item_icon.color}
							/>
						</button>
					{/each}
				</div>

				<div class="flex flex-col items-center gap-[1.5vw]">
					{#each Object.entries(icon_mapping.middle) as item}
						{@const item_name = item[0]}
						{@const item_icon = item[1].icon}

						{@const component = item_icon.component}
						{@const component_width = item_icon.width}
						{@const component_height = item_icon.height}

						{@const is_active = active_button === item_name}

						<button
							type="button"
							class="{is_active
								? 'relative bg-secondary-100 before:absolute before:-left-0.5 before:z-10 before:h-[0.875vw] before:w-[0.25vw] before:rounded-lg before:bg-primary-500'
								: 'bg-initial'} btn-icon relative rounded-[0.5vw] p-0 md:w-[3.375vw]"
							on:click={() => middle_section_click(item_name)}
						>
							<div class="inline-grid">
								{#if !is_active}
									<div
										class="absolute inset-0 flex flex-col items-center justify-center md:gap-[0.75vw]"
										transition:blur|local
									>
										<svelte:component
											this={component}
											height={component_height}
											width={component_width}
											color={item_icon.color}
										/>
										<span class="capitalize md:text-[0.875vw] md:leading-[1.05vw]">{item_name}</span
										>
									</div>
								{:else}
									<div
										class="absolute inset-0 flex items-center justify-center"
										transition:blur|local
									>
										<svelte:component
											this={component}
											height={component_height}
											width={component_width}
											color="black"
										/>
									</div>
								{/if}
							</div>
						</button>
					{/each}
				</div>

				<div class="flex flex-col-reverse items-center md:gap-[1.5vw]">
					{#each Object.entries(icon_mapping.bottom) as item}
						{@const item_name = item[0]}
						{@const item_icon = item[1].icon}
						<button
							type="button"
							class="bg-initial btn-icon flex-col justify-center p-0 text-sm md:w-[3.375vw] md:gap-[0.75vw]"
						>
							<svelte:component
								this={item_icon.component}
								height={item_icon.height}
								width={item_icon.width}
								color={item_icon.color}
							/>
							<span class="!m-0 capitalize md:text-[0.875vw] md:leading-[1.05vw]">{item_name}</span>
						</button>
					{/each}
				</div>
			</div>
		</svelte:fragment>

		<!-- Page contents go here  -->
		<slot />
	</AppShell>
</div>
