<nav class={$menu_open ? 'open' : 'closed'}>
    <NavItem url="/" name="Home" />
    <NavItem url="/publications" name="Publications" />
    <NavItem url="/photos" name="Photos" />
    <NavItem url="https://www.realnitogames.com" name="Game Design" />
    <!-- <GameDesign /> -->
    <ResumeDownload />
    {#if $menu_open === true}
        <MobileNavItem url="/" name="Home" />
        <MobileNavItem url="/publications" name="Publications" />
        <MobileNavItem url="/photos" name="Photos" />
        <MobileNavItem url="https://www.realnitogames.com" name="Game Design" />
        <MobileNavItem url="Adam_Winchell_CV.pdf" name="CV" prevent_default={true} />
        
        <div class="menu-toggle" on:click={toggle_open}>
            <img src="/up.svg" alt="caret up" />
        </div>
    {:else}
        <div class="menu-toggle" on:click={toggle_open}>
            <img src="/down.svg" alt="caret down" />
        </div>
    {/if}
</nav>


<script>
    import NavItem from "./NavItem.svelte"
    import MobileNavItem from "./MobileNavItem.svelte"
    import ResumeDownload from "./ResumeDownload.svelte"
    import { menu_open } from "../stores/store"
    let open = $menu_open;

    const toggle_open = () => {
        menu_open.set(!$menu_open)
    }

</script>


<style>
    nav {
        width: 100%;

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

    .open {
        max-height: 100%;
    }
    .closed {
        height: 7vh;
    }

    .menu-toggle {
        flex-grow: 1;
        width: 100%;
        padding: 1vh 3vw;
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 10vh;
        display: none;
    }


    @media only screen and (max-width: 640px) {
        nav {
            flex-direction: column;
            max-height: 100%;
            transition: all 150ms ease-in-out;
            /* position: absolute; */
            justify-content: flex-start;
        }
        .menu-toggle {
            display:flex;
        }
    }
</style>