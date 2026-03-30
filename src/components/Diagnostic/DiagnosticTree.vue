<script setup lang="ts">
import { ref, computed } from 'vue'
import { tree } from './diagnosticData'
import type { TreeNode } from './diagnosticData'
import DiagnosticQuestion from './DiagnosticQuestion.vue'
import DiagnosticResult from './DiagnosticResult.vue'

const currentKey = ref('start')
const history = ref<string[]>([])

const currentNode = computed(() => tree[currentKey.value])
const stepNumber = computed(() => history.value.length + 1)
const isQuestion = (n: TreeNode): n is Extract<TreeNode, { type: 'question' }> =>
  n.type === 'question'
const isResult = (n: TreeNode): n is Extract<TreeNode, { type: 'result' }> =>
  n.type === 'result'

function choose(nextKey: string) {
  history.value.push(currentKey.value)
  currentKey.value = nextKey
}

function back() {
  const prev = history.value.pop()
  if (prev) currentKey.value = prev
}

function restart() {
  history.value = []
  currentKey.value = 'start'
}
</script>

<template>
  <div class="bg-moss-900/40 border border-moss-800/50 rounded-2xl p-6 sm:p-8">
    <Transition name="fade" mode="out-in">
      <DiagnosticQuestion
        v-if="isQuestion(currentNode)"
        :key="currentKey"
        :node="currentNode"
        :step="stepNumber"
        :canGoBack="history.length > 0"
        @choose="choose"
        @back="back"
      />
      <DiagnosticResult
        v-else-if="isResult(currentNode)"
        :key="currentKey"
        :node="currentNode"
        @restart="restart"
      />
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
