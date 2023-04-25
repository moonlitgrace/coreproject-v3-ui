<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.scss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.scss';
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';

	import { blur } from 'svelte/transition';

	// skeleton and floating-ui
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// import icons
	import AnimeCore from '$icons/anime_core.svelte';
	import Logo from '$icons/logo.svelte';
	import Search from '$icons/search.svelte';
	import Home from '$icons/home.svelte';
	import Explore from '$icons/explore.svelte';
	import List from '$icons/list.svelte';
	import Schedule from '$icons/schedule.svelte';
	import Forum from '$icons/forum.svelte';
	import Settings from '$icons/settings.svelte';
	import Misc from '$icons/misc.svelte';
	import User from '$icons/user.svelte';
	import Moon from '$icons/moon.svelte';
	import SettingsOutline from '$icons/settings_outline.svelte';
	import Cross from '$icons/cross.svelte';

	import type { SvelteComponentDev } from 'svelte/internal';

	// Local
	let active_button:
		| keyof typeof icon_mapping.top
		| keyof typeof icon_mapping.middle
		| keyof typeof icon_mapping.bottom = 'home';

	// show search panel
	let show_search_panel = false;

	const icon_mapping: {
		top: {
			search: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
		};
		middle: {
			home: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};

			discover: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			list: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			schedule: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			forum: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
		};
		bottom: {
			settings: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			'misc.': {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
		};
		profile_dropdown: {
			profile: {
				name: string;
				link: string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			my_list: {
				name: string;
				link: string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			theme: {
				name: string;
				link: string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			settings: {
				name: string;
				link: string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
		};
	} = {
		top: {
			search: {
				icon: {
					component: Search,
					style: "width: 1.25vw;",
					color: 'black'
				}
			}
		},
		middle: {
			home: {
				icon: {
					component: Home,
					style: "width: 1.25vw;",
					color: 'white'
				}
			},

			discover: {
				icon: {
					component: Explore,
					style: "width: 1.25vw;",
					color: 'white'
				}
			},
			list: {
				icon: {
					component: List,
					style: "width: 1.7vw",
					color: 'white'
				}
			},
			schedule: {
				icon: {
					component: Schedule,
					style: "width: 1.25vw;",
					color: 'white'
				}
			},
			forum: {
				icon: {
					component: Forum,
					style: "width: 1.25vw;",
					color: 'white'
				}
			}
		},
		bottom: {
			settings: {
				icon: {
					component: Settings,
					style: "width: 1.25vw;",
					color: 'white'
				}
			},
			'misc.': {
				icon: {
					component: Misc,
					style: "width: 1.25vw;",
					color: 'white'
				}
			}
		},
		profile_dropdown: {
			profile: {
				name: 'Profile',
				link: '/profile/',
				icon: {
					component: User,
					style: "width: 1.25vw;",
					color: 'white'
				}
			},
			my_list: {
				name: 'My List',
				link: '/mylist/',
				icon: {
					component: List,
					style: "width: 1.5vw;",
					color: 'white'
				}
			},
			theme: {
				name: 'Theme',
				link: '/theme/',
				icon: {
					component: Moon,
					style: "width: 1.1vw;",
					color: 'white'
				}
			},
			settings: {
				name: 'Settings',
				link: '/settings/',
				icon: {
					component: SettingsOutline,
					style: "width: 1.1vw;",
					color: 'white'
				}
			}
		}
	};

	async function middle_section_click(item: string) {
		active_button = item as typeof active_button;
	}

	let popupSettings: PopupSettings = {
		event: 'click', // event
		target: 'profileDropdown' // data-popup value
	};

	// toggle search panel
	const toggle_search_panel = () => {
		show_search_panel = !show_search_panel;
	}
</script>

<div class="relative h-screen">
	<AppShell>
		<svelte:fragment slot="header">
			<div
				class="h-18 relative flex items-center justify-between py-[0.9375vw] pl-[2.1vw] pr-[3.75vw]"
			>
				<a href="/">
					<Logo style="width: 2vw;" />
				</a>

				<a href="/">
					<AnimeCore style="width: 10vw;" />
				</a>

				<button class="avatar" use:popup={popupSettings}>
					<Avatar
						rounded="rounded-[0.375vw]"
						width="w-[3.125vw]"
						src="https://i.postimg.cc/MKgxM4Hv/Screenshot-from-2023-04-22-16-59-33.png"
						initials="JD"
					/>
				</button>

				<div
					class="!left-[84.5vw] !top-[4.5vw] w-[12vw] rounded-[0.375vw] bg-surface-400 px-[0.75vw] py-[1.125vw] shadow-lg shadow-surface-900/50"
					data-popup="profileDropdown"
				>
					<div class="flex gap-[0.8vw]">
						<Avatar
							rounded="rounded-[0.375vw]"
							width="w-[2.5vw]"
							cursor="cursor-pointer"
							src="https://i.postimg.cc/MKgxM4Hv/Screenshot-from-2023-04-22-16-59-33.png"
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
							{@const item_link = item[1].link}
							{@const item_name = item[1].name}

							<a href={item_link} style="text-decoration: none;">
								<div
									class="grid cursor-pointer grid-cols-5 items-center rounded-[0.2vw] p-[0.5vw] transition duration-100 hover:bg-surface-300/20"
								>
									<svelte:component
										this={item_icon.component}
										style={item_icon.style}
										color={item_icon.color}
										class="col-span-1"
									/>
									<span class="col-span-4 text-[1vw] font-medium text-white">{item_name}</span>
								</div>
							</a>
						{/each}
					</div>
				</div>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="flex h-full w-[6.25vw] flex-col justify-between py-[2vw]">
				<div>
					<div class="flex flex-col items-center gap-5">
						{#each Object.entries(icon_mapping.top) as item}
							{@const item_icon = item[1].icon}
							<button
								type="button"
								class="btn btn-icon w-[2.5vw] rounded-[0.375vw] bg-warning-400 p-0"
								on:click={toggle_search_panel}
							>
								<svelte:component
									this={item_icon.component}
									style={item_icon.style}
									color={item_icon.color}
								/>
							</button>
						{/each}
					</div>

					<div class="mt-[2.8125vw] flex flex-col items-center gap-[1.5vw]">
						{#each Object.entries(icon_mapping.middle) as item}
							{@const item_name = item[0]}
							{@const item_icon = item[1].icon}

							{@const component = item_icon.component}

							{@const is_active = active_button === item_name}

							<button
								type="button"
								class="{is_active
									? 'relative bg-secondary-100 before:absolute before:-left-0.5 before:z-10 before:h-[0.875vw] before:w-[0.25vw] before:rounded-lg before:bg-primary-500'
									: 'bg-initial'} btn btn-icon relative w-[3.375vw] rounded-[0.5vw] p-0"
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
												style={item_icon.style}
												color={item_icon.color}
											/>
											<span class="text-[0.875vw] capitalize leading-[1.05vw]">{item_name}</span>
										</div>
									{:else}
										<div
											class="absolute inset-0 flex items-center justify-center"
											transition:blur|local
										>
											<svelte:component
												this={component}
												style={item_icon.style}
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
							class="bg-initial btn btn-icon w-[3.375vw] flex-col justify-center gap-[0.75vw] p-0 text-sm"
						>
							<svelte:component
								this={item_icon.component}
								style={item_icon.style}
								color={item_icon.color}
							/>
							<span class="!m-0 text-[0.875vw] capitalize leading-[1.05vw]">{item_name}</span>
						</button>
					{/each}
				</div>
			</div>
		</svelte:fragment>

		<slot />
	</AppShell>

	{#if show_search_panel}
		<search-panel>
			<div 
				class="absolute z-50 inset-0 bg-surface-900/95 text-white flex justify-center" 
				transition:blur={{duration: 300}}
				on:mousedown|self={toggle_search_panel}
			>
				<button class="btn absolute left-[2.1vw] top-[7.5vw] p-0" on:click={toggle_search_panel}>
					<Cross style="width: 2vw; opacity: 0.5;" />
				</button>

				<form class="mt-[7.5vw] w-[37.5vw] h-[3.75vw] relative flex items-center">
					<button class="btn absolute left-[1.25vw] p-0">
						<Search style="width: 1.25vw;" />
					</button>
					<!-- svelte-ignore a11y-autofocus -->
					<input type="text" placeholder="Search for animes, mangas and musics" autofocus class="pl-[3.50vw] w-full h-full rounded-[0.625vw] border-none !ring-0 bg-surface-400 text-white placeholder:text-surface-50 shadow-lg text-[1.1vw]" />

					<button class="btn absolute right-[1.25vw] p-0">
						<Cross style="width: 1.5vw; opacity: 0.7;" />
					</button>
				</form>
			</div>
		</search-panel>
	{/if}
</div>
