<script lang="ts">
  import { generatePrivateKey, getPublicKey, nip19 } from "nostr-tools";
  import Button from "@smui/button";
  import Textfield from "@smui/textfield";

  const getPrivateKey = (privateKeyOrNsec: string): string => {
    if (privateKeyOrNsec.startsWith("nsec")) {
      try {
        const { data } = nip19.decode(privateKeyOrNsec);
        return data as string;
      } catch {
        return "";
      }
    }
    return privateKeyOrNsec;
  };

  const getPublicKeyOrEmpty = (privateKey: string): string => {
    try {
      return getPublicKey(privateKey);
    } catch {
      return "";
    }
  };

  const getNsecOrEmpty = (privateKey: string): string => {
    try {
      // NOTE: It seems `.nsecEncode()` returns a value for an empty private key
      if (privateKey.length !== 64) {
        return "";
      }
      return nip19.nsecEncode(privateKey);
    } catch {
      return "";
    }
  };

  const getNpubOrEmpty = (privateKey: string): string => {
    try {
      return nip19.npubEncode(getPublicKey(privateKey));
    } catch {
      return "";
    }
  };

  let privateKeyOrNsec: string = "";
  $: privateKey = getPrivateKey(privateKeyOrNsec);
  $: publicKey = getPublicKeyOrEmpty(privateKey);
  $: nsec = getNsecOrEmpty(privateKey);
  $: npub = getNpubOrEmpty(privateKey);

  const generateAndFillKey = () => {
    privateKey = generatePrivateKey();
  };
</script>

<h2>Keys</h2>
<details>
  <summary> Private key related operations</summary>
  <Textfield
    type="text"
    label="Private key"
    style="width: 100%"
    bind:value={privateKey}
  />
  <Button on:click={() => generateAndFillKey()}>Generate key</Button>
  <p>
    Public key: <code>
      {publicKey}
    </code>
  </p>
  <h3>NIP19</h3>
  <p>
    nsec: <code>
      {nsec}
    </code>
  </p>
  <p>
    npub: <code>
      {npub}
    </code>
  </p>
</details>
