<section>
    <div class="info">
        <p>
            WORK IN PROGRESS
        </p>
        
    </div>
</section>


<script>
    import {menu_open} from "../stores/store"
</script>


<style>
    section {
        flex-grow: 3;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .show {
        display: flex;
    }

    .no-show {
        display: none;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
    }

    img {
        border-radius: 15%;
        max-height: 25vh;
    }

    .info {
        max-width: 50%;
        margin: 25px;
        padding: 10px;
    }

    p {
        font-size: 1.2em;
    }
     


    @media only screen and (max-width: 640px) {
        section {
            flex-direction: column;
        }

        img {
            max-height: 25vh;
            max-width: 90vw;
            border-radius: 50%;
            margin-top: 10vh;
        }
        .info {
            max-width: 90%;
        } 
    }
</style>