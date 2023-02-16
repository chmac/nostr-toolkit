<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Menu from '@smui/menu';
	import { Anchor } from '@smui/menu-surface';
	import List, { Item, Separator, Text } from '@smui/list';

	let menu: Menu;
	let anchor: HTMLDivElement;
	let anchorClasses: {
		[k: string]: boolean;
	} = {};
</script>

<TopAppBar variant="fixed">
	<Row>
		<Section>
			<div
				class={Object.keys(anchorClasses).join(' ')}
				use:Anchor={{
					addClass: (className) => {
						if (!anchorClasses[className]) {
							anchorClasses[className] = true;
						}
					},
					removeClass: (className) => {
						if (anchorClasses[className]) {
							delete anchorClasses[className];
							anchorClasses = anchorClasses;
						}
					}
				}}
				bind:this={anchor}
			>
				<IconButton class="material-icons" on:click={() => menu.setOpen(true)}>menu</IconButton>
			</div>
			<Menu bind:this={menu} anchor={false} bind:anchorElement={anchor} anchorCorner="BOTTOM_LEFT">
				<List>
					<Item>
						<Text>Menu item 1</Text>
					</Item><Separator />
					<Item>
						<Text>Menu item 2</Text>
					</Item><Separator />
					<Item>
						<Text>Menu item 3</Text>
					</Item><Separator />
					<Item>
						<Text>Menu item four</Text>
					</Item>
				</List>
			</Menu>
			<Title>Nostr Toolkit</Title>
		</Section>
	</Row>
</TopAppBar>

<slot />

<style>
	:global(body) {
		margin: 0;
		padding-top: 48px;
	}
	:global(header.mdc-top-app-bar) {
		top: 0;
	}
</style>
