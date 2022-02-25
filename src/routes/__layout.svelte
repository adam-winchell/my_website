
<main>
    <NavBar />
    <slot />
    <footer>
        <FooterItem icon="linkedin" url="https://www.linkedin.com/in/adam-winchell-3bb71b107/"/>
        <FooterItem icon="github" url="https://github.com/adam-winchell"/>
        <FooterItem icon="mortarboard" url="https://scholar.google.com/citations?user=tigkE1EAAAAJ&hl=en&oi=ao" />
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
        min-height: 100vh;
        height: 100%;

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