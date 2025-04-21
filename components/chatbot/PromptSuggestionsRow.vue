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
    "Tell me about the YoungPreneur Academy program",
    "How can I join as a mentor?",
    "What career opportunities are available?",
];

const emit = defineEmits(['suggestion-selected']);

const handleSuggestionClick = (suggestion) => {
    emit('suggestion-selected', suggestion);
};
</script>

<style scoped>
.prompt-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
}

.suggestion-button {
    background-color: #f0f0f0;
    border: none;
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.suggestion-button:hover {
    background-color: #e0e0e0;
}
</style>


<style scoped>
.prompt-suggestions {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 16px 0;
}

.suggestion-button {
    background-color: white;
    border: 1px solid #F0386B;
    color: #F0386B;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.9rem;
    white-space: nowrap;
}

.suggestion-button:hover {
    background-color: #F0386B;
    color: white;
    transform: translateY(-2px);
}

@media (max-width: 768px) {
    .prompt-suggestions {
        flex-direction: column;
    }

    .suggestion-button {
        width: 100%;
        text-align: center;
    }
}
</style>
