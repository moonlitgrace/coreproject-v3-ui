declare module "svelte-emoji-picker"{
	export declare let emojis: string[];
	export declare let value: string;
	export declare let fontSize: string;

	export declare function select(num: string): () => void;
	export declare function clear(): void;
}
