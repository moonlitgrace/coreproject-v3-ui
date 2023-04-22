<script>
	import GradientCard from "$components/shared/GradientCard.svelte";

	// icons
	import Forum from "$icons/Forum.svelte";
	import Recent from "$icons/Recent.svelte";
	import Notifications from "$icons/Notifications.svelte";
	import Language from "$icons/Language.svelte";
	import Preference from "$icons/Preference.svelte";
	import Moon from "$icons/Moon.svelte";
	import SettingsOutline from "$icons/SettingsOutline.svelte";
	import CoreProject from "$icons/CoreProject.svelte";

	const icon_mapping = {
		top: {
			forums: {
				title: "Forums",
				icon: {
					component: Forum,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
			last_watched: {
				title: "Last watched anime",
				icon: {
					component: Recent,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
			notifications: {
				title: "Notifications",
				icon: {
					component: Notifications,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
		},
		bottom: {
			language: {
				icon: {
					component: Language,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
			preferences: {
				icon: {
					component: Preference,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
			theme: {
				icon: {
					component: Moon,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			},
			settings: {
				icon: {
					component: SettingsOutline,
					width: "1.25vw",
					height: "1.25vw",
					class: "text-surface-900",
				}
			}
		}
	}
</script>


<GradientCard
	backgroundImage="https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0NDEzMzE1NzI3MzA0MzI2/animes-like-kono-subarashii-sekai-ni-shukufuku-wo.jpg"
	rounded="0.875vw"
	fromColor="from-surface-900"
	toColor="to-surface-900/10"
	direction="bg-gradient-to-tr"
	class="h-[24.3125vw] w-[16.625vw] mt-[3.4vw] border-b-2 border-l-2 border-surface-300"
>
	<div class="px-[1.875vw] pt-[2vw]">
		<div class="flex flex-col gap-[0.2w]">
			<span class="text-[1.5vw] font-bold">Welcome</span>
			<span class="text-[0.875vw] font-semibold">Jump quickly into</span>
		</div>

		<div class="mt-[1vw] flex flex-col gap-[0.625vw]">
			{#each Object.entries(icon_mapping.top) as item}
				{@const item_title = item[1].title}
				{@const item_icon = item[1].icon}

				<div class="flex items-center gap-[1vw]">
					<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
						<svelte:component
							this={item_icon.component}
							width={item_icon.width}
							height={item_icon.height}
							class={item_icon.class}
						/>
					</button>
					<span class="text-[1vw] font-bold">{item_title}</span>
				</div>
			{/each}
		</div>

		<div class="mt-[0.4vw]">
			<span class="text-[0.9vw] font-semibold">More</span>
			<div class="flex gap-[0.9375vw] mt-[0.75vw]">
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Language width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Preference width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<Moon width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
				<button class="btn w-[2.5vw] h-[2.5vw] p-0 bg-surface-50 rounded-[0.375vw]">
					<SettingsOutline width="1.25vw" height="1.25vw" class="text-surface-900" />
				</button>
			</div>
		</div>

		<div class="grid place-items-center mt-[1vw]">
			<CoreProject width="6.375vw" />
		</div>
	</div>
</GradientCard>
