// See https://kit.svelte.dev/docs/types#app

import type { Genre } from '$lib/types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			genres: Genre[];
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
