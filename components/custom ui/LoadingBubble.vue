<template>
    <div class="loading-bubble">
        <div class="typing-dots">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>

<style scoped>
.loading-bubble {
    background-color: #FFC300;
    padding: 12px 16px;
    border-radius: 20px;
    border-bottom-left-radius: 8px;
    display: inline-block;
    margin: 8px 0;
    align-self: flex-start;
}

.typing-dots {
    display: flex;
    gap: 4px;
}

.typing-dots span {
    width: 8px;
    height: 8px;
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: typing 1.4s infinite;
    display: inline-block;
}

.typing-dots span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dots span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {

    0%,
    100% {
        transform: translateY(0);
        opacity: 0.4;
    }

    50% {
        transform: translateY(-4px);
        opacity: 1;
    }
}
</style>
