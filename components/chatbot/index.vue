<template>
    <div class="chatbot-wrapper">
        <!-- Chat Modal -->
        <div :class="['chat-modal', { open: isOpen }]">
            <div class="chat-header">
                <div class="header-content">
                    <h3>Let's Chat!</h3>
                    <p class="header-subtitle">We'll reply as soon as we can</p>
                </div>
                <button class="close-button" @click="toggleChat">
                    <CloseOutlined />
                </button>
            </div>

            <div class="chat-messages" ref="chatContainerRef">
                <template v-if="noMessages">
                    <div class="message-block assistant-block">
                        <div class="message assistant">
                            <p>
                                {{ currentUser?.name ? `Hi, ${currentUser.name}! How can I help you today?` : 'Hi! How can I help you today ? ' }}
                            </p>
                        </div>
                        <span class="message-time">{{ formatTime() }}</span>
                    </div>
                    <PromptSuggestionsRow @suggestion-selected="handleSuggestionSelected" />
                </template>

                <template v-else>
                    <div v-for="(message, index) in messages" :key="index"
                        :class="['message-block', message.role === 'user' ? 'user-block' : 'assistant-block']">
                        <div :class="['message', message.role === 'user' ? 'user' : 'assistant']">
                            <p>{{ message.content }}</p>
                        </div>
                        <span class="message-time">{{ formatTime() }}</span>
                    </div>

                    <LoadingBubble v-if="isLoading" />
                </template>
            </div>

            <form @submit.prevent="handleSubmit" class="chat-input-form">
                <button type="button" class="emoji-button">
                    <SmileOutlined />
                </button>
                <input class="chat-input" v-model="input" placeholder="Write your message..." />
                <button type="submit" class="send-button">Send</button>
            </form>
        </div>

        <!-- Floating Button -->
        <button v-if="!isOpen" class="chat-toggle-button" @click="toggleChat">
            <MessageOutlined />
        </button>
    </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { MessageOutlined, CloseOutlined, SmileOutlined } from '@ant-design/icons-vue'
import PromptSuggestionsRow from './PromptSuggestionsRow.vue'
import LoadingBubble from '../custom ui/LoadingBubble.vue'

// Mocked composable for auth (replace with your own auth logic)
const currentUser = ref({ name: '' }) // or null

const input = ref('')
const messages = ref([])
const isLoading = ref(false)
const isOpen = ref(false)
const noMessages = ref(true)
const chatContainerRef = ref(null)

const toggleChat = () => {
    isOpen.value = !isOpen.value
}

const formatTime = () => {
    return new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
}

const handleSubmit = async () => {
    if (!input.value.trim()) return

    const value = input.value;
    input.value = ''

    isLoading.value = true
    noMessages.value = false

    messages.value.push({ role: 'user', content: value })

    try {
        const response = await $fetch('/api/chat/', {
            method: 'POST',
            body: {
                messages: [...messages.value, { role: 'user', content: value }]
            }
        })

        messages.value.push(response)

    } catch (error) {
        input.value = ''
        console.error('Error:', error)
        messages.value.push({
            role: 'assistant',
            content: 'I apologize, but I encountered an error. Please try again.'
        })
    }

    isLoading.value = false
}

const handleSuggestionSelected = (suggestion) => {
    input.value = suggestion;
    handleSubmit();
};

const scrollToBottom = async () => {
    await nextTick();
    if (chatContainerRef.value) {
        chatContainerRef.value.scrollTop = chatContainerRef.value.scrollHeight;
    }
};

// Watch for messages changes
watch(messages, scrollToBottom);

// Watch for loading state changes
watch(isLoading, scrollToBottom);

// Watch for chat open state
watch(isOpen, (newValue) => {
    if (newValue) {
        scrollToBottom();
    }
});
</script>

<style scoped>
/* Chatbot component styles */

/* Typing indicator animation */
.typing-indicator {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px 16px;
    background: white;
    border-radius: 16px;
    border-bottom-left-radius: 4px;
    width: fit-content;
}

.typing-indicator span {
    width: 8px;
    height: 8px;
    background: #1677ff;
    border-radius: 50%;
    display: inline-block;
    animation: bounce 1s infinite;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-4px);
    }
}

/* Suggestion tags hover effect */
.ant-tag {
    transition: all 0.3s ease;
}

.ant-tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Vercel AI SDK Message component styles */
[data-message-author="user"] {
    color: #333;
}

[data-message-author="assistant"] {
    color: #333;
}

/* Markdown content styling */
.markdown-content {
    line-height: 1.6;
}

.markdown-content p {
    margin-bottom: 0.5em;
}

.markdown-content ul,
.markdown-content ol {
    margin-bottom: 0.5em;
    padding-left: 1.5em;
}

.markdown-content code {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: monospace;
}

.markdown-content pre {
    background-color: rgba(0, 0, 0, 0.05);
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin-bottom: 0.5em;
}

.markdown-content pre code {
    background-color: transparent;
    padding: 0;
}

.chatbot-wrapper {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
}

.chat-toggle-button {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: #1677ff;
    color: white;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.chat-toggle-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    background-color: #4096ff;
}

.chat-modal {
    position: fixed;
    bottom: 30px;
    right: 20px;
    width: 370px;
    height: 550px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: 0;
    transform: translateY(20px);
    pointer-events: none;
    transition: all 0.3s ease;
    border: 1px solid #e8e8e8;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.chat-modal.open {
    opacity: 1;
    transform: translateY(0);
    pointer-events: all;
}

.chat-header {
    padding: 20px;
    background-color: white;
    color: #333;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 1px solid #e8e8e8;
}

.header-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.chat-header h3 {
    margin: 0;
    color: #333;
    font-size: 20px;
    font-weight: 600;
}

.header-subtitle {
    margin: 0;
    color: #666;
    font-size: 14px;
}

.close-button {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 18px;
    padding: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chat-messages {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: #f5f5f5;
}

.message-block {
    display: flex;
    flex-direction: column;
    gap: 4px;
    max-width: 85%;
}

.assistant-block {
    align-self: flex-start;
    align-items: flex-start;
}

.user-block {
    align-self: flex-end;
    align-items: flex-end;
}

.message {
    padding: 12px 16px;
    border-radius: 16px;
}

.message p {
    margin: 0;
    padding-bottom: 0;
}

.message-time {
    font-size: 12px;
    color: #999;
    padding: 0 4px;
}

.message.user {
    background-color: #1677ff;
    color: white;
    border-bottom-right-radius: 4px;
}

.message.assistant {
    background-color: white;
    color: #333;
    border-bottom-left-radius: 4px;
}

.chat-input-form {
    padding: 16px;
    border-top: 1px solid #e8e8e8;
    display: flex;
    gap: 12px;
    background: white;
    align-items: center;
}

.emoji-button {
    background: none;
    border: none;
    color: #999;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.chat-input {
    flex-grow: 1;
    padding: 12px;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
}

.chat-input::placeholder {
    color: #999;
}

.send-button {
    background-color: #1677ff;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-weight: 500;
}

.send-button:hover {
    background-color: #4096ff;
}

.starter-text {
    color: #666;
    text-align: center;
    margin-bottom: 16px;
}

@media (max-width: 480px) {
    .chat-modal {
        width: calc(100% - 40px);
        height: calc(100vh - 120px);
        bottom: 80px;
    }
}
</style>