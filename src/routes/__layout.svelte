
<main>
    <NavBar />
    <slot />
    <footer>
        <FooterItem icon="linkedin" />
        <FooterItem icon="github" />
        <FooterItem icon="mortarboard" />
    </footer>
</main>

<script>
    import FooterItem from "../components/FooterItem.svelte"
    import NavBar from "../components/NavBar.svelte"
</script>

<style>

    :root {
        --bg: #f5ebff;
        --nav: #9b48e9;
    }

    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        background-color: var(--bg);
    }

    footer {
        width: 100%;
        flex-grow: 1;
        max-height: 7vh;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0; 
        padding-bottom: 10px;
    }

    @media only screen and (max-width: 640px) {
        main {
            max-height: 100%;
            height: 100%;
        }
    }
</style>