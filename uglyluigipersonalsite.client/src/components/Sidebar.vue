<template>
    <div>
        <div class="text-xl px-3 py-4 overflow-y-auto">
            uglyluigi.dev
        </div>

        <div class="px-3 flex flex-col">
            <RouterLink to="/blog">blog posts</RouterLink>
                <a href="https://github.com/uglyluigi">
                    <div class="flex flex-row">
                        <img class="github-brand" src="../assets/brand-github.svg" />
                        <div class="pl-1">github</div>
                    </div>
                </a>
            <RouterLink to="/">about me</RouterLink>
            <RouterLink class="rainbow rainbow_text_animated" to="/nonogram">nonogram</RouterLink>
            <RouterLink to="/contact">contact</RouterLink>
        </div>
    </div>
</template>

<style scoped>
    .github-brand {
        filter: invert(90%) sepia(6%) saturate(242%) hue-rotate(184deg) brightness(100%) contrast(95%);
    }

    #shadowBox {
        background-color: rgb(0, 0, 0);
        /* Fallback color */
        background-color: rgba(0, 0, 0, 0.2);
        /* Black w/opacity/see-through */
        border: 3px solid;
    }

    .rainbow {
        text-decoration: underline;
    }

    .rainbow_text_animated {
        background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
        animation: rainbow_animation 6s ease-in-out infinite;
        background-size: 400% 100%;
    }

    @keyframes rainbow_animation {
        0%, 100% {
            background-position: 0 0;
        }

        50% {
            background-position: 100% 0;
        }
    }
</style>
