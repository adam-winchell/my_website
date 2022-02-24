<section>
    <div class="image-container">
        <img src="/profile.png" alt="profile">
        <h1>Adam Winchell</h1>
    </div>
    <div class="info">
        <p>
            I am currently an Applied Scientist at Amazon. I love teaching and am always looking for 
            opportunities to integrate teaching into my career journey. 
        </p>
        
        <p>
            My hobbies include board games, climbing, cooking, dungeons and dragons, hiking, painting, and video games.        
        </p>
        <p>
            If I had to describe myself in a few words, I am a creator. I have designed board games. I have crafted modules, rules, miniatures, and terrain for dungeons and dragons.
            I have built a climbing wall with friends. I will take any chance I get to concoct some crazy recipe in the kitchen. 
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