<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.scss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.scss';
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';

	import { blur } from 'svelte/transition';
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from "svelte";

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
	import Person from '$icons/Person.svelte';
	import Moon from '$icons/Moon.svelte';
	import SettingsOutline from '$icons/SettingsOutline.svelte';

	// Local
	let active_button:
		| keyof typeof icon_mapping.top
		| keyof typeof icon_mapping.middle
		| keyof typeof icon_mapping.bottom = 'home';

	let active_profile_dropdown = false;

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
		},
		profile_dropdown: {
			profile: {
				icon: {
					component: Person
				}
			},
			my_list: {
				icon: {
					component: List
				}
			},
			theme: {
				icon: {
					component: Moon
				}
			},
			settings: {
				icon: {
					component: SettingsOutline
				}
			}
		}
	};

	async function middle_section_click(item: string) {
		active_button = item as typeof active_button;
	}

	async function profile_button_click(event: MouseEvent) {
		// check if dropdown is not clicked
		if (typeof document !== 'undefined' && !(event.target as HTMLElement).closest('.dropdown') && !(event.target as HTMLElement).closest('.avatar')) {
			active_profile_dropdown = false;
		}
	}

	// adding and removing click event for dropdown
	onMount(() => {
	    if (typeof document !== 'undefined') {
	      document.addEventListener('click', profile_button_click);
	    }
	    return () => {
	      if (typeof document !== 'undefined') {
	        document.removeEventListener('click', profile_button_click);
	      }
	    };
  	});

  	onDestroy(() => {
	    if (typeof document !== 'undefined') {
	      document.removeEventListener('click', profile_button_click);
	    }
  	});
</script>

<div class="h-screen wrapper">
	<AppShell>
		<svelte:fragment slot="header">
			<div class="h-18 flex items-center justify-between pl-[2.1vw] pr-[3.75vw] py-[0.9375vw] relative">
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
					src="https://play-lh.googleusercontent.com/hKZp5Jg2rmFMsD0O2wohA1NkQTHBokXwalRpoxmjYt94WyMu4nVN0rXtbcTmh7tIur8=w2560-h1440-rw"
					initials="JD"
					on:click={() => { active_profile_dropdown = !active_profile_dropdown }}
					class="avatar"
				/>

				{#if active_profile_dropdown}
					<div class="dropdown absolute w-[12vw] bg-surface-400 rounded-[0.375vw] shadow-lg shadow-surface-900/50 right-[3.5vw] top-[4.7vw] py-[1.125vw] px-[0.75vw]" transition:blur>
						<div class="flex gap-[0.8vw]">
							<Avatar
								rounded="rounded-[0.375vw]"
								width="w-[2.5vw]"
								cursor="cursor-pointer"
								src="https://play-lh.googleusercontent.com/hKZp5Jg2rmFMsD0O2wohA1NkQTHBokXwalRpoxmjYt94WyMu4nVN0rXtbcTmh7tIur8=w2560-h1440-rw"
								initials="JD"
							/>
							<div class="flex flex-col">
								<span class="text-[0.9vw] font-semibold">Username</span>
								<span class="text-[0.8vw] font-medium">email@domain.xyz</span>
							</div>
						</div>

						<div class="mt-[1vw]">
							{#each Object.entries(icon_mapping.profile_dropdown) as item}
								{@const item_icon = item[1].icon}
								{@const item_name = item[0]}

								<div class="flex items-center gap-[0.7vw] cursor-pointer hover:bg-surface-300/20 p-[0.5vw] rounded-[0.2vw]">
									<svelte:component 
										this={item_icon.component}
										width={"1.5vw"}
									/>
									<span class="text-[1vw] font-medium capitalize">{item_name}</span>
								</div>
							{/each}
						</div>
					</div>
				{/if}
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="flex h-full flex-col justify-between py-[2vw] w-[6.25vw]">
				<div>
					<div class="flex flex-col items-center gap-5">
						{#each Object.entries(icon_mapping.top) as item}
							{@const item_icon = item[1].icon}
							<button
								type="button"
								class="btn-icon btn bg-warning-400 p-0 w-[2.5vw] rounded-[0.375vw]"
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

					<div class="flex flex-col items-center gap-[1.5vw] mt-[2.8125vw]">
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
									: 'bg-initial'} btn-icon btn relative rounded-[0.5vw] p-0 w-[3.375vw]"
								on:click={() => middle_section_click(item_name)}
							>
								<div class="inline-grid">
									{#if !is_active}
										<div
											class="absolute inset-0 flex flex-col items-center justify-center gap-[0.75vw]"
											transition:blur|local
										>
											<svelte:component
												this={component}
												height={component_height}
												width={component_width}
												color={item_icon.color}
											/>
											<span class="capitalize text-[0.875vw] leading-[1.05vw]">{item_name}</span
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
				</div>

				<div class="flex flex-col-reverse items-center gap-[1.5vw]">
					{#each Object.entries(icon_mapping.bottom) as item}
						{@const item_name = item[0]}
						{@const item_icon = item[1].icon}
						<button
							type="button"
							class="bg-initial btn-icon btn flex-col justify-center p-0 text-sm w-[3.375vw] gap-[0.75vw]"
						>
							<svelte:component
								this={item_icon.component}
								height={item_icon.height}
								width={item_icon.width}
								color={item_icon.color}
							/>
							<span class="!m-0 capitalize text-[0.875vw] leading-[1.05vw]">{item_name}</span>
						</button>
					{/each}
				</div>
			</div>
		</svelte:fragment>

		<!-- Page contents go here  -->
		<slot />
	</AppShell>
</div>