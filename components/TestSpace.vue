<template>
  <div
  class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div>
      <label>入力</label>
      <input
        type="number"
        v-model="inputData"
        @blur="onBlur"
        @focus="onFocus"
      />
    </div>
    <div>
      <label>出力</label>
      <textarea
        v-model="outputData"
        readonly
        style="height: 500px; width: 200px;"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestSpace',
  data() {
    return {
      inputData: '',
      outputData: '',
    }
  },
  methods: {
    onBlur() {
      this.setOutput('onBlur')
    },
    onFocus() {
      this.setOutput('onFocus')
    },
    setOutput(eventName) {
      if (this.outputData) this.outputData += '\n'
      this.outputData += `${eventName}: ${this.inputData}`
    }
  }
}
</script>
