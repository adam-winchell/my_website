
<main>
    <nav class={menu_open ? "mopen" : "mclosed"}>
        {#if !menu_open}
        <a class={temp === "home" ? "nav-icon active" : "nav-icon"} href="/" on:click={() => changepage("home")}>Home</a>
        <a class={temp === "photos" ? "nav-icon active" : "nav-icon"} href="/photos" on:click={() => changepage("photos")}>Photos</a>
        <a class={temp === "publications" ? "nav-icon active" : "nav-icon"} href="/publications" on:click={() => changepage("publications")}>Publications</a>
        <a class="nav-icon" href="/" >Resume</a>
        <a class="nav-icon" href="https://realnitogames.com/">Real Nito Games</a>
        {:else}
        <a class={temp === "home" ? "menu-icon active" : "menu-icon"} href="/" on:click={() => change_page_and_close("home")}>Home</a>
        <a class={temp === "photos" ? "menu-icon active" : "menu-icon"} href="/photos" on:click={() => change_page_and_close("photos")}>Photos</a>
        <a class={temp === "publications" ? "menu-icon active" : "menu-icon"} href="/publications" on:click={() => change_page_and_close("publications")}>Publications</a>
        <a class="menu-icon" href="/" on:click={()=>toggle_menu()}>Resume</a>
        <a class="menu-icon" href="https://realnitogames.com/">Real Nito Games</a>
        {/if}
        <button class="contact-icon" on:click={() => toggle_menu()}>
            {#if menu_open}
            <img src="/up.svg" alt="menu">
            {:else}
            <img src="/down.svg" alt="menu">
            {/if}
        </button>

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
    let menu_open = false;
    const changepage = (pagename) => {
       temp = pagename;
    }

    const change_page_and_close = (pagename) => {
        temp = pagename;
        menu_open = !menu_open;
    }
    const toggle_menu = () => {
       menu_open = !menu_open;
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

    .mopen {
        max-height: 100vh;
        height: 55vh;
        align-items: center;
    }

    .mclosed {
        max-height: 7vh;
        height: 7vh;
    }

    nav {
        width: 100%;
        flex-grow: 1;
        background-color: var(--nav);
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        top: 0;
        position: absolute;
        z-index: 100000000;
        transition: all 200ms ease-in-out;
    }

    .nav-icon {
        text-decoration: none;
        color: white;
        flex-grow: 1;
        min-width: 9vw;
        max-width: 10vw;
        padding: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-icon {
        text-decoration: none;
        color: white;
        flex-grow: 1;
        width: 90%;
        padding: 10px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2em;
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
        border-radius: 5%;
        background-color: var(--nav);
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

    button {
        flex-grow: 1;
        border: none;
        background: none;
        padding: 10px;
        display: none;
    }
    button img {
        stroke: white;
    }




    @media only screen and (max-width: 640px) {
        button {
            display: block;
        }

        main {
            height: 100%;
        }
        nav {
            max-height: 100%;
            flex-direction: column;
            position: fixed;
            align-items: flex-end;
            border-bottom: 1px solid darkslategrey;
            padding: 10px;
        }
        .nav-icon {
            display: none;
        }

        footer .contact-icon {
            margin: 5px auto;
        }

        footer {
            
            flex-grow: 1;
            align-items: flex-end;
        }
    }

    
</style>