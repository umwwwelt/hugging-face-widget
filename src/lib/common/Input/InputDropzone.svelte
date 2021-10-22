<script lang="ts">
	export let accept = 'image/*';
	export let label = 'Drag image file here or click to browse from your device';
	export let onSelectFile: (file: File | Blob) => void;
	export let onError: (e: string) => void;

	let fileInput: HTMLInputElement;
	let isDragging = false;
	let imgSrc: string = '';

	function onChange() {
		const file = fileInput.files?.[0];
		if (file) {
			imgSrc = URL.createObjectURL(file);
			onSelectFile(file);
		}
	}

	async function onDrop(e: DragEvent) {
		isDragging = false;
		const itemList = e.dataTransfer?.items;
		if (!itemList) {
			return;
		}
		const items: DataTransferItem[] = [];
		for (let i = 0; i < itemList.length; i++) {
			items.push(itemList[i]);
		}
		const fileItem = items.find((x) => x.kind === 'file');

		if (fileItem) {
			const file = fileItem.getAsFile();
			if (file) {
				onSelectFile(file);
			}
		} else {
			onError(`Unrecognized dragged and dropped file or element.`);
		}
	}
</script>

<input {accept} bind:this={fileInput} on:change={onChange} style="display: none;" type="file" />
<div
	class="relative border-2 border-dashed rounded mb-2 px-3 py-7 text-center cursor-pointer {isDragging
		? 'border-green-300 bg-green-50 text-green-500'
		: 'text-gray-500'} {$$props.class}"
	on:click={() => {
		fileInput.click();
	}}
	on:dragenter={() => {
		isDragging = true;
	}}
	on:dragleave={() => {
		isDragging = false;
	}}
	on:dragover|preventDefault
	on:drop|preventDefault={onDrop}
>
	{#if !imgSrc}
		<span class="pointer-events-none text-sm">{label}</span>
	{:else}
		<slot {imgSrc} />
	{/if}
</div>
