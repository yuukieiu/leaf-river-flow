<template>
  <div>
    <h1>葉っぱに書く</h1>
    <form @submit.prevent="submitCreate">
      <input v-model="form.text" placeholder="イヤなこと…" /><br />
      <input type="submit" value="流す" />
    </form>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { createLeaf } from '../../graphql/mutations'

export default {
  name: 'LeafCreate',
  data () {
    return {
      form: {
        text: ''
      }
    }
  },
  methods: {
    async submitCreate () {
      await API.graphql({
        query: createLeaf,
        variables: { input: this.form }
      })
        .then((result) => {
          console.log(result)
          this.$router.push({ name: 'LeafIndex' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
