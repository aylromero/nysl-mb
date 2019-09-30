const homeTemplate = `
             <div class="carousel slide animated zoomIn" data-ride="carousel" id="carouselExampleControls">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img alt="..." class="d-block w-100" src="img/img1.png">
                                </img>
                                <div class="carousel-caption mt-5">
                                    <h5>
                                        download our game rules
                                    </h5>
                                    <a href="img/rules.pdf">
                                        <b>
                                            click here for download
                                        </b>
                                    </a>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <img alt="..." class="d-block w-100" src="img/img2.png">
                                </img>
                                <div class="carousel-caption mt-5">
                                    <h5>
                                        Login to join the chat
                                    </h5>
                                    <i aria-hidden="true" class="fa fa-spinner fa-pulse fa-3x fa-fw" style="font-size: 22px;">
                                    </i>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img alt="..." class="d-block w-100" src="img/img3.png">
                                </img>
                                <div class="carousel-caption mt-5">
                                    <h5>
                                        SATURDAY
                                    </h5>
                                    <h5>
                                        U1 VS U6
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" data-slide="prev" href="#carouselExampleControls" role="button">
                            <span aria-hidden="true" class="carousel-control-prev-icon">
                            </span>
                            <span class="sr-only">
                                Previous
                            </span>
                        </a>
                        <a class="carousel-control-next" data-slide="next" href="#carouselExampleControls" role="button">
                            <span aria-hidden="true" class="carousel-control-next-icon">
                            </span>
                            <span class="sr-only">
                                Next
                            </span>
                        </a>
                    </div> 
                  
                    </div>
              `
const infoTemplate =   ` <div class="animated animated zoomIn">
                        <div class="scoreboard" id="scoreboard">
                            <h5 class="upcoming animated pulse ml-4">
                                Upcoming Events
                            </h5>
                            <p class="sub animated flash ml-4" id="swipe">
                                Swipe to see dates
                            </p>
                            <div class="scoreboard_wrapper">
                                <span class="scoreboard_scroller-left" href="#">
                                </span>
                                <div class="scoreboard_games-wrapper">
                                    <div class="scoreboard_games">
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                09/01-SUN
                                                <br>
                                                    9:30 am
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team1.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team2.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                9/08-SUN
                                                <br>
                                                    1:00 pm
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team3.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team4.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                9/15-SUN
                                                <br>
                                                    10:30am
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team5.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team6.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                09/22-SUN
                                                <br>
                                                    1:00 pm
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team11.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team9.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                09/29-SUN
                                                <br>
                                                    2:00 pm
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team7.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team10.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="scoreboard_game">
                                            <div class="game_header">
                                                10/06-SUN
                                                <br>
                                                    9:30 pm
                                                </br>
                                            </div>
                                            <div class="game_info">
                                                <div class="team_home">
                                                    <img alt="" src="img/team9.png">
                                                    </img>
                                                </div>
                                                <span class="game_score py-2 mr-2">
                                                    vs
                                                </span>
                                                <div class="team_away">
                                                    <img alt="" src="img/team8.png">
                                                    </img>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span class="scoreboard_scroller-right" href="#">
                                </span>
                            </div>
                        </div>
                        </div>  `
const contactTemplate =  ` <div class="wrapper">
                        <div class="company-info animated lightSpeedIn">
                            <h2 class="mt-5">
                                Contact
                            </h2>
                            <ul>
                                <li class="sb">
                                    <i class="fa fa-map-marker-alt">
                                    </i>
                                    123 Fake st
                                </li>
                                <li class="sb">
                                    <i class="fa fa-phone">
                                    </i>
                                    (555) 555-5555
                                </li>
                                <li class="sb">
                                    <i class="fa fa-envelope">
                                    </i>
                                    nysl@x.com
                                </li>
                            </ul>
                        </div>
                        <div class="contact animated bounceInRight">
                            <form id="contactForm">
                                <p>
                                    <label>
                                        First Name
                                    </label>
                                    <input id="name" name="name" required="" type="text">
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Last Name
                                    </label>
                                    <input id="lastname" name="lastname" type="text">
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Email Address
                                    </label>
                                    <input id="email" name="email" required="" type="email">
                                    </input>
                                </p>
                                <p>
                                    <label>
                                        Phone Number
                                    </label>
                                    <input id="phone" name="phone" type="text">
                                    </input>
                                </p>
                                <p class="full">
                                    <label>
                                        Message
                                    </label>
                                    <textarea id="message" name="message" rows="5">
                                    </textarea>
                                </p>
                                <p class="full">
                                    <button id="contactB" type="submit">
                                        Submit
                                    </button>
                                </p>
                            </form>
                        </div>
                    </div> `
var app = new Vue({
    el:"#app",
    data:{
      object:[],
      games:[],
      locations:[],
      teams:[],
      shields:[],
      info:[],
      teamsObject: [],
      dataIsLoaded: false,
      months:['September','October'],
      filterData:[],
      monthSelected: "all",
      teamSelected:"all",
      locationSelected:"all",
      currentpage:"landing",
    },
    created:function(){
      this.getData();
    },
    components: {
      home: {
        template: homeTemplate,

      },
      info: {
        template: infoTemplate,
      },
      contact: {
        template: contactTemplate,
      },

    },
    methods: {
      getData: function(){
          fetch("https://next.json-generator.com/api/json/get/N1q2ZwVww",
              {method: "GET"})
          .then(function(response){
            return response.json();
          }).then(function(json){
            app.dataIsLoaded = true;
            app.object = json;
            app.teamsObject = app.object.teams;
            app.locations = app.object.locations;
            app.games = app.object.games;
            app.filterData = app.games;
            // app.showlanding = true;
              app.teamName();
              app.shieldImg();
              app.teamInfo();

          }).catch(function(error){
            console.log(error);
          })
      },
      teamName: function(){
        var a = Object.values(app.object.teams);
        app.teams = [];
        for(let i =0; i < a.length; i++){
          app.teams.push(a[i].name);
        }
        return app.teams;
      },
      shieldImg: function(){
        var a = Object.values(app.object.teams);
        app.shields = [];
        for(let i =0; i < a.length; i++){
          app.shields.push(a[i].shield);
        }
        return app.shields;
      },

      teamInfo: function(){
        var a = Object.values(app.object.teams);
        app.info = [];
        for(let i =0; i<a.length; i++){
          app.info.push(a[i]);
        }return app.info;
      },
      filterGame: function(){
        app.filterData = [];

          var b = app.games;
          for(let i=0; i<b.length; i++){
              if (b[i].month == app.monthSelected || app.monthSelected == "all") {
                if (app.teamsObject[b[i].team].name == app.teamSelected || app.teamsObject[b[i].opponent].name == app.teamSelected||app.teamSelected == "all") {
                  if (app.locations[b[i].location].name == app.locationSelected || app.locationSelected == "all") {
                    app.filterData.push(b[i]);
                  }
                }
              }

          }
      },
      storeMonth: function(event){
        app.monthSelected = event.target.value;
      },
      storeTeam: function(event){
        app.teamSelected = event.target.value;
      },
      storeLocation: function(event){
        app.locationSelected = event.target.value;
      },
      openAccordion: function(id){
        document.getElementById(id).classList.toggle('is-open');
      },
      confirmMap: function(href){

        var x = confirm("Open in Map?");
        if(x == true){
          location.href = href;
        }else {
          console.log("no");
        }
      },

      currentPage: function(page){
        app.currentpage = page;
        if(app.currentpage == 'result'){
          app.filterGame();
        }
        if(app.currentpage == 'schedule'){
          app.locationSelected = 'all';
          app.monthSelected = 'all';
          app.teamSelected = 'all';
        }
      }

      },
})
