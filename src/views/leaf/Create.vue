<template>
  <v-container>
  <div>
    <h1>葉っぱに書く</h1>
    <v-img
      max-height="300"
      max-width="300"
      src='../../../public/img/leaf1.png'
      >
      <v-row align-content="center" style="height: 300px">
        <v-col align="center">{{ form.text }}</v-col>
      </v-row>
    </v-img>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        @submit.prevent="submitCreate">
        <v-text-field
          v-model="form.text"
          :counter="300"
          :rules="nameRules"
          label="イヤなこと…"
          required
        ></v-text-field>
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          type="submit"
        >
          流す
        </v-btn>
      </v-form>
  </div>
  </v-container>
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
      },
      valid: true,
      nameRules: [
        v => !!v || 'なにか入力してね',
        v => (v && v.length <= 300) || '300文字未満にしてね'
      ]
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
          this.$router.push({ name: 'LeafCreate' })
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
