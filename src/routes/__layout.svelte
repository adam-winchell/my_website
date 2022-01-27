
<main>
    <nav>
        <a class={temp === "home" ? "nav-icon active" : "nav-icon"} href="/" on:click={() => changepage("home")}>Home</a>
        <a class={temp === "photos" ? "nav-icon active" : "nav-icon"} href="/photos" on:click={() => changepage("photos")}>Photos</a>
        <a class={temp === "publications" ? "nav-icon active" : "nav-icon"} href="/publications" on:click={() => changepage("publications")}>Publications</a>
        <a class="nav-icon" href="/" >Resume</a>
        <a class="nav-icon" href="https://realnitogames.com/">Real Nito Games</a>

    </nav>
    <slot />
    <footer>
        <a class="contact-icon" href="#"><img src="/github.svg" alt="github"></a>
        <a class="contact-icon" href="#"><img src="/linkedin.svg" alt="linkedin"></a>
        <a class="contact-icon" href="#"><img src="/mortarboard.svg" alt="google scholar"></a>
    </footer>
</main>

<script>
    let temp="home";
    const changepage = (pagename) => {
       temp = pagename;
    }
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

    nav {
        width: 100%;
        flex-grow: 1;
        background-color: var(--nav);
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 7vh;
        font-weight: bold;
    }

    a {
        text-decoration: none;
        color: white;
        flex-grow: 0;
        min-width: 9vw;
        padding: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active {
        background-color: var(--bg);
        color: black;
    }

    .nav-icon:hover {
        background-color: var(--bg);
        color: black;
    }


    .contact-icon img {
        height: 4vh;
    }

    .contact-icon:hover {
        background-color: red;
    }

    footer {
        width: 100%;
        flex-grow: 1;
        max-height: 7vh;
        display: flex;
        justify-content: center;
        align-items: center;
        bottom: 0;

    }

    
</style>