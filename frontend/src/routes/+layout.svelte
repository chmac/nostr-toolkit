<script lang="ts">
  import TopAppBar, { Row, Section, Title } from "@smui/top-app-bar";
  import IconButton from "@smui/icon-button";
  import Menu from "@smui/menu";
  import { Anchor } from "@smui/menu-surface";
  import List, { Item, Separator, Text } from "@smui/list";

  let menu: Menu;
</script>

<TopAppBar variant="fixed">
  <Row>
    <Section>
      <IconButton class="material-icons" on:click={() => menu.setOpen(true)}
        >menu</IconButton
      >
      <Menu bind:this={menu}>
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
