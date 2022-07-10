<section>
    <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="10000">
          <!-- Indicators -->
          <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
          </ol>
      
          <!-- Wrapper for slides -->
          <div class="carousel-inner">
            <div class="item active">
              <img src="photos/campaign_finale.jpg" alt="Final Battle" >
              <div class="carousel-caption">
                <h3>Final battle of my Dungeons and Dragons campaign, <i>A Tale of Two Liches</i></h3>
                <p>Commisioned from <a href="https://justaguy.artstation.com/"> Thuan Nguyen</a> </p>
              </div>
            </div>
      
            <div class="item">
              <img src="photos/hexmap_seas.jpg" alt="Dnd World Map" >
              <div class="carousel-caption">
                <h3>The world map of my Dungeons and Dragons campaign, <i>A Tale of Two Liches</i></h3>
                <p>Inspired by Discworld and Legend of Zelda</p>
              </div>
            </div>
          
            <div class="item">
              <img src="photos/climbing_wall.jpeg" alt="Climbing Wall" >
              <div class="carousel-caption">
                <h3>A climbing wall I built with friends</h3>
              </div>
            </div>

            <div class="item">
              <img src="photos/dark_souls_painting.jpg" alt="Dark Souls" >
              <div class="carousel-caption">
                <h3>A painting I made inspired by <i>Dark Souls</i></h3>
              </div>
            </div>

            <div class="item">
              <img src="photos/Deepbreach.jpg" alt="deepbreach" >
              <div class="carousel-caption">
                <h3>The city of Deepbreach, the megacity in the Underdark campaign module I am writing with Josh Ladd</h3>
                <p>Commisioned from <a href="https://justaguy.artstation.com/"> Thuan Nguyen</a> </p>
              </div>
            </div>

          </div>
      
          <!-- Left and right controls -->
          <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
</section>
  

<style>

    section {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 7vh;
        min-height: 93vh;
    }
    #myCarousel {
        max-height: 80vh;
    }

    img {
        max-height: 80vh;
        margin: 0 auto;
    }
    a {
        text-decoration: underline;
        color: white;
        
    }
    
</style>