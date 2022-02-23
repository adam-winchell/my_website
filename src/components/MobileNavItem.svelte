<a on:click={update_page} href={url}>
    <span>{name}</span>
</a>

<script>
    import { page, menu_open } from "../stores/store.js"

    export let name = "Home"
    export let url = "/"
    export let prevent_default = false;

    let active = $page == name;
    $: {
        active = $page == name;
        console.log($page);
    }


    const update_page = () => {
        if (prevent_default !== true){
            page.set(name)
        }
        if ($menu_open === true) {
            menu_open.set(false);
        }
    }
</script>


<style>
    a {
        text-decoration: none;
        color: white;
        flex-grow: 1;
        padding: 10px;
        border-radius: 5px;
        margin-left: 5px;
        margin-right: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 3vh 3vw;
        top: 0;
        background-color: var(--bg);
        color: var(--nav);
    }

    span {
        font-size: 2em;
        margin: 10px;
        border-radius: 5px;
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media only screen and (max-width: 640px) {
        a {
            max-width: 100%;
            width: 95vw;
        }
    }
</style>