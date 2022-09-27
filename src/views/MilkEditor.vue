<template>
  <div class="">
    roomId : {{roomId}}
    <div ref="editor"></div>
  </div>
</template>

<script>
import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
// import { commonmark } from '@milkdown/preset-commonmark';
import { collaborative, collabServiceCtx } from '@milkdown/plugin-collaborative';
import { menu } from '@milkdown/plugin-menu';
import { slash } from '@milkdown/plugin-slash';
import { tooltip } from '@milkdown/plugin-tooltip';
import { clipboard } from '@milkdown/plugin-clipboard';
import { cursor } from '@milkdown/plugin-cursor';
import { gfm } from '@milkdown/preset-gfm';
import { Doc } from 'yjs';
import { WebsocketProvider } from 'y-websocket'

// import { CollabManager } from '@/services/collabManager';

export default {
  name: 'MilkEditor',
  data(){
    return{
      default: '#default'
    }
  },
  async mounted() {
    const editor = await Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, this.$refs.editor);
      ctx.set(defaultValueCtx, this.default);
    })
    .use(nord)
    // .use(commonmark)
    .use(menu)
    .use(slash)
    .use(tooltip)
    .use(cursor)
    .use(clipboard)
    .use(gfm)
    .use(collaborative)
    .create();

    const doc = new Doc();
    const wsProvider = new WebsocketProvider(
      // "ws://localhost:1234",
      "wss://flame-long-base.glitch.me/",       // '<YOUR_WS_HOST>',
      // "wss://yjs-websocket--1234.local-corp.webcontainer.io",
      // 'wss://demos.yjs.dev',
      'milkdown', // roomId
      doc // Doc
    );

    console.log (editor)

    editor.action((ctx) => {
      const collabService = ctx.get(collabServiceCtx);

      collabService
      // bind doc and awareness
      .bindDoc(doc)
      .setAwareness(wsProvider.awareness)
      // connect yjs with milkdown
      .connect();
    });


  },

  computed: {
    roomId() {
      return this.$store.state.roomId
    },

  }


}
</script>

<style lang="css" scoped>
. {

}
</style>
