<script lang="ts">
    import { page } from "$app/stores";
    import { OpengraphGenerator } from "$functions/opengraph";
    import Chevron from "$icons/chevron.svelte";
    import Cross from "$icons/cross.svelte";
    import Delete from "$icons/delete.svelte";
    import Edit from "$icons/edit.svelte";
    import Search from "$icons/search.svelte";
    import Star from "$icons/star.svelte";
    import Upload from "$icons/upload.svelte";
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { ProgressBar } from "@skeletonlabs/skeleton";
    import prettyBytes from "pretty-bytes";

    let file_list: FileList;

    // Declare and handle the file_size
    let file_size = 0;
    $: Array.from(file_list ?? []).forEach((item) => {
        file_size += item.size;
    });

    function handle_file_change(e: Event): void {
        const files = (e.target as HTMLInputElement).files as FileList;
    }

    const opengraph_html = new OpengraphGenerator({
        title: `Upload on AnimeCore`,
        url: $page.url.href,
        description: "",
        site_name: "CoreProject",
        locale: "en_US",
        image_url: ""
    }).generate_opengraph();
</script>

<svelte:head>
    {@html opengraph_html}
</svelte:head>

<container class="block p-5 md:py-[2vw] md:pl-[5vw] md:pr-[3.75vw]">
    <upload-area class="grid grid-cols-12 gap-7 md:gap-[5vw] md:px-[10vw]">
        <upload-progress class="col-span-12 mt-20 flex items-end md:col-span-7 md:pb-[1.5vw]">
            <div class="w-full text-center md:text-left">
                <ProgressBar
                    label="Progress Bar"
                    value={50}
                    max={100}
                    height="h-3 md:h-[0.9vw]"
                    rounded="rounded md:rounded-[0.25vw]"
                    track="bg-surface-400"
                    meter="bg-primary-500"
                />
                <progress-info class="mt-5 flex flex-col gap-3 leading-none md:mt-[1.5vw] md:gap-[0.5vw]">
                    <span class="font-semibold md:text-[1vw]">{prettyBytes(file_size)}</span>
                    <span class="text-surface-50 md:text-[1vw]">17 folders, 29 files</span>
                </progress-info>
            </div>
        </upload-progress>
        <upload-input class="col-span-12 md:col-span-5">
            <FileDropzone
                on:change={handle_file_change}
                bind:files={file_list}
                multiple={true}
                name="files"
                padding="md:p-[2vw] !bg-surface-400 h-48 md:h-full"
                border="border-none"
                rounded="rounded-2xl md:rounded-[1vw]"
                regionInterfaceText="flex flex-col place-items-center gap-2 md:gap-[1vw]"
                slotLead="leading-none"
                slotMessage="leading-none"
                slotMeta="leading-none flex flex-col md:gap-[0.25vw]"
            >
                <svelte:fragment slot="lead">
                    <Upload class="w-9 md:w-[2vw]" />
                </svelte:fragment>
                <svelte:fragment slot="message">
                    <span class="text-base font-semibold text-surface-50 md:text-[1.1vw]">Upload a file</span>
                </svelte:fragment>
                <svelte:fragment slot="meta">
                    <divider class="flex items-center justify-center gap-2 md:gap-[0.5vw]">
                        <left-border class="w-5 border-t-2 border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                        <span class="text-xs font-semibold text-surface-300 md:text-[0.9vw]">Or</span>
                        <right-border class="w-5 border-t-2 border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                    </divider>
                    <span class="text-sm text-surface-50 md:text-[1.1vw]">Browse</span>
                </svelte:fragment>
            </FileDropzone>
        </upload-input>
    </upload-area>

    <hr class="!md:border-t-[0.2vw] mb-5 mt-10 !border-t-2 !border-primary-200/25 opacity-0 md:mb-[1vw] md:mt-[3vw] md:opacity-100" />

    <uploads>
        <uploads-options class="flex flex-col justify-between md:flex-row">
            <div class="flex items-center justify-between md:justify-start md:gap-[3vw]">
                <form class="relative flex items-center">
                    <button
                        class="btn absolute left-2 p-0 md:left-[1vw]"
                        aria-label="Search"
                    >
                        <Search
                            class="hidden md:flex"
                            style="width: 1vw; opacity: 0.75;"
                        />
                        <Search
                            class="flex md:hidden"
                            style="width: 1rem; opacity: 0.75;"
                        />
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        class="h-full w-56 rounded-lg border-none bg-surface-400 pl-12 text-base leading-none text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50 md:w-full md:rounded-[0.5vw] md:py-[0.5vw] md:pl-[3vw] md:text-[1vw]"
                    />
                </form>
                <button class="btn flex gap-2 p-0 leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Cross class="w-4 rotate-45 md:w-[1vw]" />
                    New folder
                </button>
            </div>

            <div class="mt-5 flex justify-between md:mt-0 md:justify-start md:gap-[3vw]">
                <button class="btn flex gap-3 p-0 text-base font-semibold leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Edit
                        variant="without_underline_around_pencil"
                        class="w-4 md:w-[1vw]"
                    />
                    Rename
                </button>
                <button class="btn flex gap-3 p-0 text-base font-semibold leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Edit
                        variant="with_underline_around_pencil"
                        class="w-4 md:w-[1vw]"
                    />
                    Edit Details
                </button>
                <button class="btn flex gap-3 p-0 text-base font-semibold leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Delete class="w-4 md:w-[1vw]" />
                    Delete
                </button>
            </div>
        </uploads-options>

        <uploads-table class="mt-10 block md:mt-[3vw]">
            <table class="w-full border-separate border-spacing-y-2 leading-none text-surface-50 md:border-spacing-y-[0.25vw]">
                <thead>
                    <tr class="text-left md:text-[1vw]">
                        <th>
                            <input
                                type="checkbox"
                                class="cursor-pointer rounded border-2 bg-transparent focus:ring-0 focus:ring-offset-0 md:h-[1.25vw] md:w-[1.25vw] md:border-[0.2vw]"
                            />
                        </th>
                        {#each ["name", "type", "date modified", "size"] as table_heading_item}
                            <th>
                                <div class="flex items-center md:gap-[0.5vw]">
                                    <span class="capitalize">{table_heading_item}</span>
                                    <button class="btn p-0"><Chevron class="md:w-[1vw]" /></button>
                                    <button class="btn p-0"><Chevron class="rotate-180 opacity-50 md:w-[1vw]" /></button>
                                </div>
                            </th>
                        {/each}
                    </tr>
                </thead>
                <!-- spacing -->
                <tbody>
                    <tr>
                        <td class="h-5 md:h-[1vw]" />
                    </tr>
                </tbody>
                <!-- spacing -->
                <tbody>
                    {#each file_list ?? [] as file}
                        {@const name = file.name}
                        {@const last_modified = file.lastModified}
                        {@const type = "[DIRECTORY]"}
                        {@const size = prettyBytes(file.size)}

                        <tr>
                            <td class="flex items-center md:gap-[1vw]">
                                <input
                                    type="checkbox"
                                    class="cursor-pointer rounded border-2 bg-transparent focus:ring-0 focus:ring-offset-0 md:h-[1.25vw] md:w-[1.25vw] md:border-[0.2vw]"
                                />
                                <button class="btn hidden p-0 md:flex">
                                    <Star
                                        variant="empty"
                                        class="text-surface-50/50 md:w-[1.5vw]"
                                        fill_color="none"
                                    />
                                </button>
                            </td>
                            <!-- name  -->
                            {#each [name, type, last_modified, size] as table_item}
                                <td>
                                    <span class="md:text-[1vw]">{table_item}</span>
                                </td>
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
        </uploads-table>
    </uploads>
</container>

<style lang="scss">
    // table {
    //     border-collapse: separate;
    //     border-spacing: 0 1vw;
    // }
</style>
