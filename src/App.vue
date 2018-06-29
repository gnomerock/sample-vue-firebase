<template>
  <div>
    <input type="text" v-model="name">
    <input type="text" v-model="description">
    <button @click="onSave">save</button>
    <br>
    <div v-for="game in games" :key="game.id">
      <input type="text" :value="game.name" @input="onDataChange(game)">
      <input type="text" :value="game.description" @input="onDataChange(game)">
      <button @click="deleteGame(game)">x</button>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        games: [],
        name: '',
        description: '',
        Game: this.$db.collection('Game')
      }
    },
    firestore() {
      return {
        games: this.Game.orderBy('createdAt')
      }
    },
    methods: {
      async onSave() {
        let result = await this.Game.add({
          name: this.name,
          description: this.description,
          createdAt: new Date()
        })
      },
      async deleteGame(game) {
        this.Game.doc(game.id).delete()
      },
      async onDataChange(game) {
        const temp = {...game}
        delete temp['.id']
        this.Game.doc(game.id).set(temp)
      }
    }
  }
</script>
