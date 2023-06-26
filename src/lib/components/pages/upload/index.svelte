<script lang="ts">
    import Upload from "$icons/upload.svelte";
    import { FileDropzone } from "@skeletonlabs/skeleton";
    import { ProgressBar } from "@skeletonlabs/skeleton";
</script>

<container class="block md:py-[2vw] md:pl-[5vw] md:pr-[3.75vw]">
    <upload-area class="grid grid-cols-12 md:gap-[5vw] md:px-[10vw]">
        <upload-progress class="flex place-items-center md:col-span-7">
            <div class="w-full">
                <progress
                    value={30}
                    max={100}
                    class="h-[0.9vw] !rounded !bg-surface-400"
                />
                <progress-info class="flex flex-col leading-none md:mt-[1vw] md:gap-[0.5vw]">
                    <span class="font-semibold md:text-[1vw]">699.5 GB</span>
                    <span class="text-surface-50 md:text-[1vw]">7 folders, 29 files</span>
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
                    <span class="font-semibold md:text-[1.1vw]">Upload a file</span>
                </svelte:fragment>
                <svelte:fragment slot="meta">
                    <divider class="flex items-center md:gap-[0.5vw]">
                        <left-border class="border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                        <span class="font-semibold text-surface-300 md:text-[1vw]">Or</span>
                        <right-border class="border-surface-300 md:w-[2vw] md:border-t-[0.1vw]" />
                    </divider>
                    <span class="md:text-[1.1vw]">Browse</span>
                </svelte:fragment>
            </FileDropzone>
        </upload-input>
    </upload-area>

    <hr class="!border-t-[0.2vw] !border-primary-200/25 md:my-[3vw]" />

    <uploads>
        <uploads-options />
    </uploads>
</container>
