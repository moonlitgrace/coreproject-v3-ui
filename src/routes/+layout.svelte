<script lang="ts">
	// Your custom Skeleton theme:
	import '../theme.scss';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.scss';
	import { AppShell, Avatar } from '@skeletonlabs/skeleton';

	import { blur } from 'svelte/transition';

	import ScrollArea from '$components/shared/scroll_area.svelte';

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
	import Circle from '$icons/circle.svelte';

	import { page } from '$app/stores';

	import type { SvelteComponentDev } from 'svelte/internal';

	// skeleton and floating-ui
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Local
	let active_button:
		| keyof typeof icon_mapping.top
		| keyof typeof icon_mapping.middle
		| keyof typeof icon_mapping.bottom;

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
				url: undefined | string;
			};

			discover: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
			list: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
			schedule: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
			forum: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
		};
		bottom: {
			settings: {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
			'misc.': {
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
				url: undefined | string;
			};
		};
		profile_dropdown: {
			profile: {
				name: string;
				url: undefined | string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			my_list: {
				name: string;
				url: undefined | string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			theme: {
				name: string;
				url: undefined | string;
				icon: {
					component: typeof SvelteComponentDev;
					style: string;
					color: string;
				};
			};
			settings: {
				name: string;
				url: undefined | string;
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
					style: 'width: 1.25vw;',
					color: 'black'
				}
			}
		},
		middle: {
			home: {
				icon: {
					component: Home,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: '/'
			},

			discover: {
				icon: {
					component: Explore,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: undefined
			},
			list: {
				icon: {
					component: List,
					style: 'width: 1.7vw',
					color: 'white'
				},
				url: undefined
			},
			schedule: {
				icon: {
					component: Schedule,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: undefined
			},
			forum: {
				icon: {
					component: Forum,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: undefined
			}
		},
		bottom: {
			settings: {
				icon: {
					component: Settings,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: undefined
			},
			'misc.': {
				icon: {
					component: Misc,
					style: 'width: 1.25vw;',
					color: 'white'
				},
				url: undefined
			}
		},
		profile_dropdown: {
			profile: {
				name: 'Profile',
				url: '/profile/',
				icon: {
					component: User,
					style: 'width: 1.25vw;',
					color: 'white'
				}
			},
			my_list: {
				name: 'My List',
				url: '/mylist/',
				icon: {
					component: List,
					style: 'width: 1.5vw;',
					color: 'white'
				}
			},
			theme: {
				name: 'Theme',
				url: '/theme/',
				icon: {
					component: Moon,
					style: 'width: 1.1vw;',
					color: 'white'
				}
			},
			settings: {
				name: 'Settings',
				url: '/settings/',
				icon: {
					component: SettingsOutline,
					style: 'width: 1.1vw;',
					color: 'white'
				}
			}
		}
	};

	// Activate button based on Urls
	$: {
		Object.values(icon_mapping).forEach((_) => {
			Object.entries(_).forEach((item) => {
				const button_name = item[0] as typeof active_button;
				const internal_object = item[1];
				if ('url' in internal_object) {
					const url = internal_object.url as String;
					if (url === $page.url.pathname) {
						active_button = button_name;
					}
				}
			});
		});
	}

	async function middle_section_click(item: string) {
		active_button = item as typeof active_button;
	}

	let popupSettings: PopupSettings = {
		event: 'click', // event
		target: 'profileDropdown' // data-popup value
	};

	// search panel //
	// toggle search panel
	const toggle_search_panel = () => {
		show_search_panel = !show_search_panel;
	};
	// search input
	let search_query = 'Kimetsu no Yaiba';
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
							{@const item_url = item[1].url}
							{@const item_name = item[1].name}

							<a href={item_url} style="text-decoration: none;">
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
							{@const item_href = item[1].url}

							{@const component = item_icon.component}

							{@const is_active = active_button === item_name}

							<a
								href={item_href ?? 'javascript:void(0)'}
								type="button"
								class="{is_active
									? 'relative bg-secondary-100 before:absolute before:-left-0.5 before:z-10 before:h-[0.875vw] before:w-[0.25vw] before:rounded-lg before:bg-primary-500'
									: 'bg-initial'} btn btn-icon relative w-[3.375vw] rounded-[0.5vw] p-0"
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
											<svelte:component this={component} style={item_icon.style} color="black" />
										</div>
									{/if}
								</div>
							</a>
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
				class="absolute inset-0 z-50 flex items-center justify-center bg-surface-900/95 text-white"
				transition:blur={{ duration: 300 }}
				on:mousedown|self={toggle_search_panel}
			>
				<div class="mt-[3.5vw] flex flex-col items-center">
					<form class="relative flex h-[3.7vw] w-[37.5vw] items-center">
						<button class="btn absolute left-[1.25vw] p-0">
							<Search style="width: 1.25vw;" />
						</button>
						<!-- svelte-ignore a11y-autofocus -->
						<input
							bind:value={search_query}
							type="text"
							placeholder="Search for animes, mangas and musics"
							autofocus
							class="h-full w-full rounded-[0.625vw] border-none bg-surface-400 pl-[3.50vw] text-[1.1vw] font-semibold text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50"
						/>

						<button class="btn absolute right-[1.25vw] p-0" on:click={() => (search_query = '')}>
							<Cross style="width: 1.5vw; opacity: 0.7;" />
						</button>
					</form>

					<div class="mt-[1.5vw] flex gap-[4vw]">
						<div>
							<span class="text-[1.2vw] font-semibold text-surface-50">anime</span>
							<div
								class="mt-[0.2vw] h-[28.25vw] w-[21.875vw] rounded-[0.75vw] bg-surface-400 p-[1vw] shadow-lg"
							>
								<ScrollArea offsetScrollbar gradientMask>
									{#each Array(6) as _}
										<div
											class="flex cursor-pointer items-center gap-[0.75vw] rounded-[0.7vw] p-[0.8vw] transition duration-300 hover:bg-surface-300/20"
										>
											<img
												src="https://cdn-cfmok.nitrocdn.com/juJsjTwdTqWjkJBaBrLnvLeovPsDevAD/assets/images/optimized/rev-37d38d6/wp-content/uploads/1587837891_336_Demon-Slayer-Kimetsu-No-Yaiba-4K-Wallpapers-2020.jpg"
												alt={search_query}
												class="h-[3.5vw] w-[3.5vw] rounded-[0.5vw] object-cover"
											/>
											<div class="flex flex-col">
												<span class="text-[1.1vw] font-semibold text-white">Kimetsu no Yaiba</span>
												<span
													class="text-[0.7vw] font-medium uppercase leading-none text-surface-200"
													>Demon slayer</span
												>
												<div
													class="flex items-center gap-[0.3vw] pt-[0.1vw] text-[0.7vw] text-surface-200"
												>
													<span>2006</span>
													<span>TV</span>
													<Circle style="width: 0.2vw;" />
													<span>26 eps</span>
												</div>
											</div>
										</div>
									{/each}
								</ScrollArea>
							</div>
						</div>

						<div>
							<span class="text-[1.2vw] font-semibold text-surface-50">manga</span>
							<div
								class="mt-[0.2vw] h-[28.25vw] w-[21.875vw] rounded-[0.75vw] bg-surface-400 shadow-lg"
							>
								<div
									class="flex h-full flex-col items-center justify-center gap-[0.2vw] text-[1.1vw]"
								>
									<span class="font-medium leading-none">mangacore integration</span>
									<span class="font-semibold leading-none">comming soon</span>
								</div>
							</div>
						</div>

						<div>
							<span class="text-[1.2vw] font-semibold text-surface-50">music</span>
							<div
								class="mt-[0.2vw] h-[28.25vw] w-[21.875vw] rounded-[0.75vw] bg-surface-400 shadow-lg"
							>
								<div
									class="flex h-full flex-col items-center justify-center gap-[0.2vw] text-[1.1vw]"
								>
									<span class="font-medium leading-none">soundcore integration</span>
									<span class="font-semibold leading-none">comming soon</span>
								</div>
							</div>
						</div>
					</div>

					<span class="mt-[2vw] text-[0.8vw] text-surface-50">
						Want even advanced searching with genres, time-ranges, tags and more? Try the <a
							href="/explore"
							class="!text-surface-50">Explore</a
						> page
					</span>
				</div>
			</div>
		</search-panel>
	{/if}
</div>
