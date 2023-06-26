<script lang="ts">
    import Cross from "$icons/cross.svelte";
    import Delete from "$icons/delete.svelte";
    import Edit from "$icons/edit.svelte";
    import Search from "$icons/search.svelte";
    import Upload from "$icons/upload.svelte";
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { ProgressBar } from "@skeletonlabs/skeleton";
</script>

<container class="block md:py-[2vw] md:pl-[5vw] md:pr-[3.75vw]">
    <upload-area class="grid grid-cols-12 md:gap-[5vw] md:px-[10vw]">
        <upload-progress class="flex items-end md:col-span-7 md:pb-[1.5vw]">
            <div class="w-full">
                <ProgressBar
                    label="Progress Bar"
                    value={50}
                    max={100}
                    height="md:h-[0.9vw]"
                    rounded="md:rounded-[0.25vw]"
                    track="bg-surface-400"
                    meter="bg-primary-500"
                />
                <progress-info class="flex flex-col leading-none md:mt-[1.5vw] md:gap-[0.5vw]">
                    <span class="font-semibold md:text-[1vw]">292.8 GB</span>
                    <span class="text-surface-50 md:text-[1vw]">17 folders, 29 files</span>
                </progress-info>
            </div>
        </upload-progress>
        <upload-input class="md:col-span-5">
            <FileDropzone
                name="files"
                padding="md:p-[2vw] !bg-surface-400"
                border="border-none"
                rounded="md:rounded-[1vw]"
                regionInterfaceText="flex flex-col place-items-center md:gap-[1vw]"
                slotLead="leading-none"
                slotMessage="leading-none"
                slotMeta="leading-none flex flex-col md:gap-[0.25vw]"
            >
                <svelte:fragment slot="lead">
                    <Upload class="md:w-[2vw]" />
                </svelte:fragment>
                <svelte:fragment slot="message">
                    <span class="font-semibold text-surface-50 md:text-[1.1vw]">Upload a file</span>
                </svelte:fragment>
                <svelte:fragment slot="meta">
                    <divider class="flex items-center md:gap-[0.5vw]">
                        <left-border class="border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                        <span class="font-semibold text-surface-300 md:text-[0.9vw]">Or</span>
                        <right-border class="border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                    </divider>
                    <span class="text-surface-50 md:text-[1.1vw]">Browse</span>
                </svelte:fragment>
            </FileDropzone>
        </upload-input>
    </upload-area>

    <hr class="!border-t-[0.2vw] !border-primary-200/25 md:mb-[1vw] md:mt-[3vw]" />

    <uploads>
        <uploads-options class="flex justify-between">
            <div class="flex items-center md:gap-[3vw]">
                <form class="relative flex items-center">
                    <button
                        class="btn absolute left-[1vw] p-0"
                        aria-label="Search"
                    >
                        <Search style="width: 1vw;" />
                    </button>
                    <input
                        type="text"
                        placeholder="Search"
                        class="h-full w-full border-none bg-surface-400 leading-none text-white shadow-lg !ring-0 placeholder:font-medium placeholder:text-surface-50 md:rounded-[0.5vw] md:py-[0.5vw] md:pl-[3vw] md:text-[1vw]"
                    />
                </form>
                <button class="btn flex p-0 leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Cross class="rotate-45 md:w-[1vw]" />
                    New folder
                </button>
            </div>

            <div class="flex md:gap-[3vw]">
                <button class="btn flex p-0 leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Edit
                        variant="without_underline_around_pencil"
                        class="md:w-[1vw]"
                    />
                    Rename
                </button>
                <button class="btn flex p-0 leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Edit
                        variant="with_underline_around_pencil"
                        class="md:w-[1vw]"
                    />
                    Edit Details
                </button>
                <button class="btn flex p-0 leading-none text-surface-50 md:gap-[0.5vw] md:rounded-[0.25vw] md:text-[1vw]">
                    <Delete class="md:w-[1vw]" />
                    Delete
                </button>
            </div>
        </uploads-options>
    </uploads>
</container>
