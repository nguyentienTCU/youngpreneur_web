<template>
    <div class="prompt-suggestions">
        <button v-for="(suggestion, index) in suggestions" :key="index" class="suggestion-button"
            @click="handleSuggestionClick(suggestion)">
            {{ suggestion }}
        </button>
    </div>
</template>

<script setup>
const suggestions = [
    "Tell me about YoungPreneur Academy 🚀",
    "How can I join as a mentor? 🤝",
    "Career opportunities available? 💼",
];

const emit = defineEmits(['suggestion-selected']);

const handleSuggestionClick = (suggestion) => {
    emit('suggestion-selected', suggestion);
};
</script>

<style scoped>
.prompt-suggestions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 20px 0;
    width: 100%;
}

.suggestion-button {
    background: linear-gradient(135deg, #ffffff 0%, #fff5f8 100%);
    border: 1.5px solid rgba(240, 56, 107, 0.3);
    color: #F0386B;
    padding: 10px 16px;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-size: 0.85rem;
    text-align: left;
    width: 100%;
    overflow: visible;
    white-space: normal;
    line-height: 1.4;
    backdrop-filter: blur(8px);
    box-shadow: 0 2px 8px rgba(240, 56, 107, 0.1);
}

.suggestion-button:hover {
    background: linear-gradient(135deg, #F0386B 0%, #FF6B98 100%);
    color: white;
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 6px 16px rgba(240, 56, 107, 0.25);
    border-color: transparent;
}

@media (max-width: 768px) {
    .suggestion-button {
        text-align: left;
        padding: 8px 14px;
        font-size: 0.8rem;
    }
}
</style>
