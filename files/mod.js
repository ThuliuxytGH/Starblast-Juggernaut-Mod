const gameOptions = { 
  
  info: {
    version: "0.8",
    name: "Juggernaut\n",
    creator: "Thuliux",
    developer: "Megalodon\n",
    
    "flagShip Builders": "Nok, Kuroyammy",
    "Ship Builders": "Thuliux, Megalodon, Basit, ShadowFighter191, A198\n"
  },
  
  ships: [
    A_Speedster_605,
    Pulsor_606,
    Preculsor_607,
    Contraband_608,
    NanoNemesis_609,
    Machete_610,
    Exodia_611,
    Ark_X_612,
    Wakizashi_613
  ],
  
  juggernauts: [
    Crystallid_799,
    Lancer_798,
    Biomorph_797
  ],
  
  flagShips: [
    Archon_630,
    Vigilant_631
  ],
  
  defaultShip: [
    Fly_101
  ],
  
  captureSpeed: 2, // 2
  roundsAmount: 3,
  
  colors: {
    gettingCaptured: ["255, 255, 255", "120,120,120", "55,55,55"]
  },
  teams: {
    0: { // "Juggernaut"
      color: "13, 191, 25",
      hue: 110, // green
      ships: [799, 798, 797]
    },
    1: { // "Hunters"
      color: "207, 49, 49",
      hue: 0, // red
      ships: [608, 605, 606, 607, 609, 610, 611, 612, 613]
    },
    2: {
      color: "255, 175, 0",
      hue: 30, // orange
      ships: [630, 631]
    }
  }
};

const vocabulary = [
  { text: "You", icon:"\u004e", key:"O" },
  { text: "GG", icon:"\u00a3", key:"G" },
  { text: "Sorry", icon:"\u00a1", key:"S" },
  { text: "No Problem", icon:"\u0047", key:"P" },
  
  { text: "What?", icon:"\u004b", key:"Q" },
  { text: "Wait", icon:"\u0048", key:"T" },
  { text: "Yes", icon:"\u004c", key:"Y" },
  { text: "No", icon:"\u004d", key:"N" },
  
  { text: "Attack", icon:"\u00b4", key:"A" },
  { text: "Shield up", icon:"\u0063", key:"H" },
  { text: "Juggernaut", icon:"\u00bf", key:"J" },
  { text: "Powerup", icon:"\u00c0", key:"I" },
  
  { text: "Thanks", icon:"\u0041", key:"X" },
  { text: "Regroup", icon:"\u00bd", key:"F" },
  { text: "Me", icon:"\u004f", key:"E" },
  { text: "Spread out", icon:"\u00bc", key:"D" }
];

const map = 
"                                                                                                    \n"+
"                                                                                                    \n"+
"   9             5                                                                                  \n"+
"  99      9                83                                                        44             \n"+
" 99       99               74       6363477                      53            3     943            \n"+
" 9         9                       789998854            7      3459            8     996            \n"+
" 9         9                       4999999854                334999                   974           \n"+
"                                         9994               569999                    995           \n"+
"                       5                   99               47999                     995         8 \n"+
"                                     88    99               8999                                  5 \n"+
"            9                         4     9                     7                                 \n"+
"           99                                                    87                                 \n"+
"          99                                             85                                         \n"+
"         99                                                                                         \n"+
"     99 99                                                                                          \n"+
"      999                                                                                           \n"+
"                      99                                                                            \n"+
" 99                   9                                                                             \n"+
" 9999                                                                                               \n"+
"                                                                                            686     \n"+
"                                                                                      8      45     \n"+
"                                                          7                           8             \n"+
"                                                                                      4             \n"+
"                                           5                        999                             \n"+
"                                  99       685                     99999                            \n"+
"                9999              9999      566                   999 999                           \n"+
"              99999                                                                                 \n"+
"                        7                                                                           \n"+
"                                                                                                    \n"+
"                                                                                                    \n"+
"                                                                                                    \n"+
"                                                                           99                       \n"+
"                                       7          56             9        999                       \n"+
"                                                 7856            99       999                       \n"+
"            8                       5                          7  99      99                        \n"+
"       8                4                                          99    999              98        \n"+
"            8                                                           999           65  997       \n"+
"           9                                                                         579  95        \n"+
"                                                                                    3899            \n"+
"                                                                                  35599             \n"+
"                                                                                  7999              \n"+
"                               9                                    4                               \n"+
"            388664886           9                                  74                               \n"+
"           489999999                           9    53837                                           \n"+
"          3799999                                  399994477                                        \n"+
"         3599                                        99999933               6                       \n"+
"        6399                                              995                                       \n"+
"        399                                                93                         884           \n"+
"        39                                                  5                         787           \n"+
"        59                  84                                                        6             \n"+
"                            57           9                                                          \n"+
"                             5                                                                      \n"+
"                                                 5 35                                               \n"+
"            5                                                                                       \n"+
"                      7                                                                             \n"+
"                                                                                                    \n"+
"              3                                                                             86      \n"+
"                                                                         99              73 67      \n"+
"                         6                                                9999            547       \n"+
"                                                                             9                      \n"+
"     4              3         5                                                                     \n"+
"    546                                         53538       3                                       \n"+
"    5745          9                         76766999       88                                       \n"+
"                 99                       366999999        6    7                                   \n"+
"                 99                      8599999                                                    \n"+
"                 9                                                             9995                 \n"+
"                99                                                           999855                 \n"+
"                                                                            99555                   \n"+
"             99                                                            9984                     \n"+
"            99                                                           99953             47       \n"+
"            9                      99                                   45757            584        \n"+
"                                  99                                                   46763        \n"+
"   7                             99        99                                          4            \n"+
"                                 9          9                                                       \n"+
"                                            99                                                      \n"+
"                                             9                                                      \n"+
"         45                  7                                                        568           \n"+
"        539                                                  57                          7843       \n"+
"        699    945               9                            765                           865     \n"+
"        3999   993               99                             7    8                         348  \n"+
"        3899999966               999                                 5577                        66 \n"+
"         87789937                  999                               7876                           \n"+
"    7       7846                     9                                 588                          \n"+
"    4                                                                                               \n"+
"                        3                                                                           \n"+
"                                                                                                    \n"+
"                                                                                                    \n"+
"                                                                                                    \n"+
"               58                                                                                   \n"+
"                                                                                                    \n"+
"                                                                                               6    \n"+
"                                                                                   3545       88    \n"+
"   589                                                                          748799       83     \n"+
"   35999                                                                       5499999       83     \n"+
"    63999 99993                                                                4999          6      \n"+
"     3739999765          687                                                                        \n"+
"       646676         4553                                                                          \n"+
"                     54                                                                             \n"+
"                                                                                                    \n"+
"                                                                                                    ";

setTimeout(() => {game.custom.started||prepareGame()}, 400);

this.options = {
  root_mode: "",
  map_name: `${gameOptions.info.name} - Beta v${gameOptions.info.version}`,
  ships: [gameOptions.ships, gameOptions.juggernauts, gameOptions.flagShips, gameOptions.defaultShip].flat(Infinity),
  vocabulary: vocabulary,
  custom_map: map,
  friendly_colors: Object.keys(gameOptions.teams).length,
  reset_tree: true,
  max_players: 60,
  map_size: 100,
  weapons_store: false,
  crystal_value: 0,
  asteroids_strength: 6,
  starting_ship: 800, //infinite lives
  speed_mod: 1.2,
};

const gameCommands = {
  normal: {
    usage: "normal <juggType> <ID jugg> <ID flag>",
    description: "Used to start the game with one command and let the mod do the rest:\n<juggShip> Choose a specific ship for the juggernaut",
    action: function(juggType=undefined, IDjugg=undefined, IDflag=undefined) {
      if (game.custom.memory.isJuggernaut !== undefined || game.custom.memory.isFlagShip !== undefined) {
        gameCommands.log("The game is already running, you cannot use this command anymore", "red");
        return;
      }
      functions.normalStart(juggType, IDjugg, IDflag);
    }
  },
  setJugg: {
    usage: "setJugg <ID> <type>",
    description: "Used to Choose a new Juggernaut:\n<ID> Choose a specific player\n<type> choose a specific juggernaut ship to use",
    action: function(ID, type=undefined) {
      let player = game.findShip(ID);
      if (player === game.custom.memory.isJuggernaut) {
        gameCommands.log("is already the juggernaut, try again with another valid ID.", "red", player);
        return;
      }
      if (type !== undefined) {
        game.custom.memory.juggType = type;
      }
      functions.selectJuggernaut(player);
      gameCommands.log("is now the juggernaut!", "green", player);
    }
  },
  remJugg: {
    usage: "remJugg",
    description: "Used to remove the current Juggernaut",
    action: function() {
      let player = game.custom.memory.isJuggernaut;
      if (player === undefined) {
        gameCommands.log("There are no juggernaut in the game", "red", player);
        return;
      }
      functions.removeJuggernaut(player);
      gameCommands.log("is now back as a normal player.", "orange", player);
    }
  },
  setFlag: {
    usage: "setFlag <ID> <type>",
    description: "Used to Choose a new FlagShip:\n<ID> Choose a specific player\n<type> choose a specific flagShip to use",
    action: function(ID, type=undefined) {
      let player = game.findShip(ID);
      if (player === game.custom.memory.isFlagShip) {
        gameCommands.log("This player is already the flagship holder, try again with another valid ID.", "red", player);
        return;
      }
      functions.selectFlagShip(player, type);
      gameCommands.log("is now the FlagShip!", "green", player);
    }
  },
  remFlag: {
    usage: "remFlag",
    description: "Used to remove the current FlagShip",
    action: function() {
      let player = game.custom.memory.isFlagShip;
      if (player === undefined) {
        gameCommands.log("There are no flagship in the game", "red", player);
        return;
      }
      functions.removeFlagShip(player);
      gameCommands.log("is now back as a normal player.", "orange", player);
    }
  },
  info: {
    usage: "info <commands>|<players>",
    description: "Allows you to see all of the informations about:\n<commands> Shows every commands on the mod\n<players> Shows the player list\n",
    action: function(type) {
      switch(type) {
        default: gameCommands.log(`Wrong Input`, "red"); break;
        case "commands":
          const commandDescriptions = Object.keys(gameCommands)
            .filter(command => ![ 'findColor', 'log', 'getArguments', 'resolveCommands' ].includes(command))
            .map(command => { 
              const { usage, description } = gameCommands[command];
              return `[[guib;#85ff70;]Command:] [[g;Gold;]${usage}] \n[[i;#70dcff;]${description}]`;
            }).join("\n");
          game.modding.terminal.echo(`${commandDescriptions}`);
          break;
        case "players":
          const playerList = {
            jugg: game.custom.memory.isJuggernaut?`[[i;#70dcff;]ID:] [[g;Gold;]${game.custom.memory.isJuggernaut.id}][[i;#70dcff;], Name:] [[g;Gold;]${game.custom.memory.isJuggernaut.name.replace(/[\[\]]/g, '|')}]`:`[[g;#70aeff;]None]`,
            flag: game.custom.memory.isFlagShip?`[[i;#70dcff;]ID:] [[g;Gold;]${game.custom.memory.isFlagShip.id}][[i;#70dcff;], Name:] [[g;Gold;]${game.custom.memory.isFlagShip.name.replace(/[\[\]]/g, '|')}]`:`[[g;#70aeff;]None]`,
            play: game.ships.filter(ship => ship !== game.custom.memory.isFlagShip && ship !== game.custom.memory.isJuggernaut)
              .map(ship => `[[i;#70dcff;]ID:] [[g;Gold;]${ship.id}][[i;#70dcff;], Name:] [[g;Gold;]${ship.name.replace(/[\[\]]/g, '|')}]`)
              .join("\n"),
          };
          game.modding.terminal.echo(`[[g;#fffc70;]Amount of players:] [[gb;#fffc70;]${game.ships.length}]\n`);
          game.modding.terminal.echo(`[[gu;#36f108;]Juggernaut][[g;#36f108;] -] ${playerList.jugg}`);
          game.modding.terminal.echo(`[[gu;#f10d0d;]FlagShip][[g;#36f108;] -] ${playerList.flag}\n`);
          game.modding.terminal.echo(`[[gu;#70aeff;]Players][[g;#70aeff;]:] \n${playerList.play||"[[g;#70aeff;]None]"}\n`);
          break;
      }

    }
  },
  findColor: function(color) { // do colors
    switch(color) {
      case "none": return;
      case "green": return "#70ffc1";
      case "red": return "#ff7070";
      case "orange": return "#ffb670";
      case "lightblue": return "#70dcff";
      case "yellow": return "#fff870";
      default: return "#ffffff";
    }
  },
  log: function(action, color, ship) { // simply to write stuff in the console
    const newColor = gameCommands.findColor(color);
    const player = ship ? `[[g;${newColor};]Player:] [[g;Gold;]${ship.name}][[g;${newColor};], ID:] [[g;Gold;]${ship.id}][[g;${newColor};], ` : "";
    game.modding.terminal.echo(`${player}[[g;${newColor};]${action}]\n`);
  },
  getArguments: function (cmd) { // do the actual stuff for the cpmmands
    cmd = cmd.trim();
    let args = [];
    if (cmd.length < 1) return args;
    let separator = `"'`.includes(cmd[0]) ? cmd[0] : ' ';
    let i = separator == ' ' ? 0 : 1;
    for (; i < cmd.length; ++i) {
      let index = i;
      while (index < cmd.length && (cmd[index] != separator || (cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) ++index;
      let lit = separator == ' ' ? '"' : separator;
      let value = eval(lit + cmd.slice(i, index) + lit);
      if (!isNaN(value)) value = +value;
      args.push(value);
      ++index;
      while (index < cmd.length) {
        if (cmd[index] == ' ') {
          ++index;
          continue;
        }
        if ((cmd[index] == '"' || cmd[index] == "'") && !((cmd.slice(i, index).match(/\\+$/) || [''])[0].length % 2)) {
          separator = cmd[index];
          break;
        }
        separator = ' ';
        --index;
        break;
      }
      i = index;
    }
    return args;
  },
  resolveCommands: function () { // resolve commands 
    for (let i in gameCommands) {
      if (i == 'getPlayerName' || i == `findAvailableID` || i == `getArguments` || i == `log` || i == `resolveCommands`) continue;
      game.modding.commands[i] = function (req) {
        return gameCommands[i].action(...this.getArguments(req.replace(i + " ", "")));
      }.bind(this);
    }
  }
};

var functions = {
  normalStart: function(juggType=undefined, IDjugg=undefined, IDflag=undefined) {
    // duplicatas to make sure the mod doesn't miss a tick
    for (let i = 0; i < Object.keys(points.points).length; i++) game.custom.memory.pointsInfo[i].captureState = 100;
    game.custom.memory.juggShield = 999999;
    game.custom.gameEnded = false;
    
    if (typeof(juggType) == "number") {
      game.custom.memory.juggType = juggType;
    }
    let newJugg;
    if (IDjugg === undefined) {
      newJugg = functions.random(functions.getPlayers().filter(ship => ship.alive));
    } else {
      newJugg = game.findShip(IDjugg);
    }
    let newFlag;
    if (IDflag === undefined) {
      newFlag = functions.random(functions.getPlayers().filter(ship => ship.alive && ship !== newJugg));
    } else {
      newFlag = game.findShip(IDflag);
    }
    functions.selectJuggernaut(newJugg);
    functions.selectFlagShip(newFlag);
  },
  random: function(list) { // returns a random object of a list
    return list[Math.floor(Math.random() * list.length)];
  },
  setShip: function(team, ship, type, coords = {x: undefined, y: undefined}) {
    ship.set({
      team: team==2?1:team,
      hue: gameOptions.teams[team].hue,
      shield: ship === game.custom.memory.isJuggernaut ? game.custom.memory.juggShield : 999999,
      stats: ship === game.custom.memory.isJuggernaut ? 00000000 : 66666666,
      type: type,
      crystals: team === 1 ? 720:1280,
      x: coords.x,
      y: coords.y,
      collider: true
    });
  },
  getPlayers: function() {
    return game.ships.filter(ship => ship !== game.custom.memory.isFlagShip).filter(ship => ship !== game.custom.memory.isJuggernaut);
  },
  selectJuggernaut: function(newJugg) { // function to do the juggernaut change | no jugg => first set | yes jugg => switch between old and new
    const oldJugg = game.custom.memory.isJuggernaut;
    if (oldJugg) {
      const newShipType = this.random(gameOptions.teams[1].ships);
      this.setShip(1, oldJugg, newShipType, {x:0, y:-440});
      functions.shipSwitch.toggle(oldJugg, true, newShipType);
      oldJugg.custom.isOutOfSpawn = false;
    }
    game.custom.memory.isJuggernaut = newJugg;
    this.setShip(0, newJugg, game.custom.memory.juggType, {x:0, y:0});
    functions.shipSwitch.toggle(newJugg, false);
    functions.healthBar.updateUI(newJugg, false);
    game.ships.filter(ship => ship !== newJugg).forEach(ship => {this.alert(ship, `Warning`, `Juggernaut class alien detected in the sector!`, `Juggernaut: ${newJugg.name}`, `red`, 5000, {v1: 8, v2: 5, v3: 3})});
    if (game.custom.initialized === false) { // start the game when first jugg is chosen
      game.custom.initialized = true;
    }
  },
  removeJuggernaut: function(jugg) {
    game.custom.memory.isJuggernaut = undefined;
    jugg.custom.isOutOfSpawn = false;
    const newShipType = this.random(gameOptions.teams[1].ships);
    this.setShip(1, jugg, newShipType, {x:0, y:-440});
    functions.shipSwitch.toggle(jugg, true);
    functions.healthBar.updateUI(jugg, false);
  },
  selectFlagShip: function(newFlag, type=undefined) {
    const oldFlag = game.custom.memory.isFlagShip;
    if (oldFlag) {
      const newShipType = this.random(gameOptions.teams[1].ships);
      this.setShip(1, oldFlag, newShipType, {x:0, y:-440});
      functions.shipSwitch.toggle(oldFlag, true, newShipType);
      oldFlag.custom.isOutOfSpawn = false;
    }
    game.custom.memory.isFlagShip = newFlag;
    this.setShip(2, newFlag, type?type:this.random(gameOptions.teams[2].ships));
    functions.shipSwitch.toggle(newFlag, false);
    if (newFlag.custom.isOutOfSpawn === false) {
      this.outOfSpawn(newFlag);
    }
    this.alert(game.custom.memory.isJuggernaut, `Warning`, `Hostile human battalion detected in the sector!`, `FlagShip: ${newFlag.name}`, `red`, 5000, {v1: 8, v2: 5, v3: 3});
  },
  removeFlagShip: function(flag) {
    game.custom.memory.isFlagShip = undefined;
    flag.custom.isOutOfSpawn = false;
    const newShipType = this.random(gameOptions.teams[1].ships);
    this.setShip(1, flag, newShipType, {x:0, y:-440});
    functions.healthBar.updateUI(flag, false);
  },
  spawn: function(ship) { // manage spawn
    ship.custom.isOutOfSpawn = false;
    functions.shipSwitch.toggle(ship, true);
    if (ship.custom.initialized) {
      this.setShip(1, ship, ship.type, {x:0, y:-450});
      return;
    }
    this.setShip(1, ship, 605, {x:0, y:-450});
    ship.custom.initialized = true;
    Object.entries(game.custom.memory.pointsInfo).forEach(([key, value]) => {game.setUIComponent(value.UI)})
    game.setUIComponent(game.custom.memory.radarBackground);
    this.UIblocker(ship);
    this.alert(ship, `Juggernaut`, `Created by:`, "Thuliux and Megalodon", `yellow`, 7000, {v1: 12, v2: 3, v3: 4});
  },
  outOfSpawn: function(ship) {
    ship.set({x:ship.x, y:-380});
    functions.shipSwitch.toggle(ship, false);
    ship.custom.isOutOfSpawn = true;
    this.alert(ship, `Playing`, `You're out of the spawn!`, "", `yellow`, 3000, {v1: 8, v2: 4, v3: 4});
  },
  alert: function(ship, value1, value2="", value3="", color="none", time=3000, i={v1: 4, v2: 4, v3: 4}) {
      clearTimeout(ship.custom.logtimeout);
      ship.custom.logtimeout = setTimeout(() => {ship.setUIComponent({id: "alertText", visible: false, position: [0, 0, 0, 0]})}, time);
      ship.setUIComponent({
        id: "alertText",
        position: [-5, -5, 110, 110],
        clickable: false,
        visible: true,
        components: [
          {type: "text", position: [0, 20, 100, i.v1], color: gameCommands.findColor(color), value: value1},
          {type: "text", position: [0, 25+(i.v1-i.v2), 100, i.v2], color: gameCommands.findColor(color), value: value2},
          {type: "text", position: [0, 30+(i.v2-i.v3)+(i.v1-i.v2), 100, i.v3], color: gameCommands.findColor(color), value: value3},
        ]
      });
    },
  radarPos: {
      zoom: 10 / 100,
      positize: function (x) { 
        return Math.max(x, 0) || 0;
      },
		  X: function(x, size) {
			  return this.positize((x + 100 * 5 - size) * this.zoom);
		  },
		  Y: function(y, size) {
			  return this.positize((-y + 100 * 5 - size) * this.zoom);
		  },
		  addRadarSpot: function(type,x,y,width,height,color="rgba(255,255,255,0.6)",value=undefined) {
		    switch(type) {
		      case "box":return{type:type, position:[this.X(x, width/2),this.Y(y, height/2),width/2,height/2], fill:color};
		      case "round":return{type:type, position:[this.X(x-45, width/2),this.Y(y+45, height/2),width/2.5,height/2.5], stroke:color, width: 2};
		      case "text":return{type:type, position:[this.X(x-45, width/2),this.Y(y+45, height/2),width/2.5,height/2.5], value: value, color: color};
		    }
      }
    },
  UIblocker: function(ship) {
      ship.setUIComponent({
        id: "buy_lifes_blocker",
        visible: true,
        clickable: true,
        shortcut: String.fromCharCode(187),
        position: [65,0,10,10],
        components: []
      });
    },
  shipSwitch: {
    toggle: function(ship, visible, type=false) {
      // background
      this.setBackground(ship, visible, type?type:ship.type);
      // buttons
      const list = game.custom.memory.shipsInfo;
      list.forEach((value, index) => {
        ship.setUIComponent({
          id: `shipSwitch|${value.name}`,
          position: visible ? this.nextPos(index) : [0,0,0,0],
          clickable: visible,
          visible: visible,
          shortcut: index.toString(),
          components: [
            {type: "box", position: [0, 0, 100, 100], fill: "rgb(68, 85, 102)", stroke: "rgba(204, 221, 238, 0.8)", width: 6},
            {type: "text", position: [5, 10, 90, 47], align: "center", value: value.name, color: "rgb(255,255,255)"},
            {type: "text", position: [5, 60, 90, 25], align: "center", value: `by: ${value.designer}`, color: "rgb(200,200,200)"},
          ]
        });
      });
    },
    setBackground: function(ship, visible, type=605) {
      const nameOfTheShip = game.custom.memory.shipsInfo.filter(val => val.typespec.code == type)[0].name;
      ship.setUIComponent({
        id: `switchbackground`,
        position: visible ? [14, 65, 56, 23] : [0,0,0,0],
        clickable: false,
        visible: visible,
        components: [
          {type: "box", position: [0, 0, 100, 100], fill: "rgba(68, 85, 102, 0.4)", stroke: "rgba(204, 221, 238, 0.8)", width: 3},
          {type: "text", position: [2, 4, 98, 18], align: "left", value: "Choose your ship  [0 -> 8]", color: "rgba(204, 221, 238, 1)"},
          {type: "text", position: [0, 4, 98, 18], align: "right", value: `Current Ship: ${nameOfTheShip}`, color: "rgba(204, 221, 238, 1)"}
        ]
      });
    },
    nextPos: function(index) {
      if (index < 5) {return [15+(11*index), 72, 10, 6]} 
      else {return [15+(11*(index-5)), 80, 10, 6]}
    },
    action: function(ship, name) {
      const type = game.custom.memory.shipsInfo.filter(val => val.name == name)[0].typespec.code;
      const maxCrystals = 20 * Math.trunc(type / 100) * Math.trunc(type / 100);
      ship.set({
        type: type,
        crystals: maxCrystals,
        stats: 66666666, shield: 9999, vx: 0, vy: 0
      });
      this.setBackground(ship, true, type);
    }
  },
  healthBar: { // Jugg health bar
    finder: function(type) { // allows to find what ship the juggernaut has
      return gameOptions.juggernauts.map(str => JSON.parse(str)).filter(el => el.typespec.code === type)[0];
    },
    updateUI: function(ship, visible) { // UI component for the health bar in game
      try {
        let jug = game.custom.memory.isJuggernaut; // finds who is juggernaut
        const typeship = gameOptions.teams[1].ships.includes(jug.type) ? 799 : jug.type;
        game.custom.memory.juggShield = Math.round(jug.shield);
        ship.setUIComponent({
          id: "juggHealthBar",
          position: visible ? [24, 4, 53, 6] : [0,0,0,0],
          clickable: false,
          visible: visible,
          components: [
            {type: "box", position: [0, 10, 100, 78], stroke: "#cf3131", width: 2},
            {type: "box", position: [0, 10, ((Math.round(jug.shield)/this.finder(typeship).specs.shield.capacity[1]) * 100), 78], fill: "#cf3131"},
            {type: "text", position: [0, 21.77, 100, 54.55], align: "center", value: `Juggernaut [${this.finder(typeship).typespec.name}]`, color: "#ffffff"},
            {type: "text", position: [1, 21.77, 100, 54.55], align: "left", value: `🛡️${Math.trunc((game.custom.memory.juggShield)/10)/100}K`, color: "#fffff"},
          ]
        });
      } catch(e) {ship.setUIComponent({id: "juggHealthBar",position: [0,0,0,0],visible: false})}
    }
  },
  findColor: function(ship) {
    switch (true) {
      case !ship.alive: return "rgba(100, 100, 100, 0.8)";
      case ship === game.custom.memory.isJuggernaut: return "rgba(0, 186, 0, 0.8)";
      case ship === game.custom.memory.isFlagShip: return "rgba(255, 180, 0, 0.8)";
      default: return "rgba(255, 255, 255, 0.8)";
    }
  },
  updateScoreboard: function(game) {
    const sortedShips = {
      juggernaut: game.custom.memory.isJuggernaut?[game.custom.memory.isJuggernaut]:[],
      players: [game.custom.memory.isFlagShip?[game.custom.memory.isFlagShip]:[], functions.getPlayers().sort((a,b) => b.score - a.score)].flat(Infinity)
    };
    const Scoreboard = {
      id: "scoreboard",
      clickable: false,
      visible: true,
      components: [
        { type: "box", position: [0, 0, 100, 9.75], fill: `RGBA(${gameOptions.teams[0].color}, 0.35)` },
        { type: "text", position: [3, 0.75, 69, 8], value: "Juggernaut", color: "rgba(255,255,255,0.8)", align: "left" },
        
        ...sortedShips.juggernaut.map((ship, i) => [ // takes all of the juggs and displays them
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * i + 11, 77, 8.5], id: ship.id, color: this.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * i + 11.75, 30, 7.5], value: ship.score, color: this.findColor(ship), align: "right" }
        ]).flat(Infinity),
        
        { type: "box", position: [0, 10 * sortedShips.juggernaut.length + 10.5, 100, 9.75], fill: `RGBA(${gameOptions.teams[1].color}, 0.35)` },
        { type: "text", position: [3, 10 * sortedShips.juggernaut.length + 11.25, 69, 8], value: "Players", color: "rgba(255,255,255,0.8)", align: "left" },
        { type: "text", position: [3, 10 * sortedShips.juggernaut.length + 11.25, 95, 8], value: `👥${sortedShips.players.length}`, color: "rgba(255,255,255,0.8)", align: "right" },
        
        ...sortedShips.players.map((ship, i) => [ // takes all of the players and displays them
          { type: "text", position: [0, 0, 77, 7.5], value: "" },
          { type: "player", index: i, position: [0, 10 * (i+sortedShips.juggernaut.length) + 21.5, 77, 8.5], id: ship.id, color: this.findColor(ship), value: "", align: "left" },
          { type: "text", position: [68, 10 * (i+sortedShips.juggernaut.length) + 22, 30, 7.5], value: ship.score, color: this.findColor(ship), align: "right" }
        ]).flat(Infinity)
      ]
    };
    for (let ship of game.ships) {
      if (ship === null) continue;
      let components = [...Scoreboard.components];
      let index = components.findIndex(c => c.type == "player" && c.id === ship.id);
      if (index == -1) {
        let last = Scoreboard.components.at(-1);
        last.id = ship.id;
        last.color = this.findColor(ship); 
        Scoreboard.components.at(-1).value = ship.score;
        index = Scoreboard.components.length - 1;
      }
      const pos = (ship.team === 0) ? 
      [0, 10 * components[index].index + 10.1, 100, 10] : 
      [0, 10 * (components[index].index + sortedShips.juggernaut.length) + 20.75, 100, 10];
      Scoreboard.components.splice(index, 0, {type: "box",position: pos, fill: "rgba(200, 200, 255, 0.125)"});
      ship.setUIComponent(Scoreboard);
      Scoreboard.components = components;
    }
  },
  win: {
    prepare: function() {
      for (let ship of game.ships) ship.set({collider: false});
      game.custom.gameEnded = true;
      for (let i = 0; i < Object.keys(points.points).length; i++) {
        var memory = game.custom.memory;
        var memoUI = memory.pointsInfo[i];
        memoUI.captureState = 100;
        memory.radarBackground.components[i].stroke = `RGBA(${gameOptions.teams[1].color}, 0.6)`;
        memoUI.UI.components[0].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
        memoUI.UI.components[0].stroke = `RGBA(${gameOptions.teams[1].color}, 1)`;
        memoUI.UI.components[1].position[2] = 97;
        memoUI.UI.components[1].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
        memoUI.UI.components[2].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
        memoUI.UI.components[3].color = "#ffffff";
        memoUI.UI.components[4].value = `100%`;
        memoUI.UI.components[5].value = `🔒️`;
        points.updateEverything(i,0);
      }
    },
    jugg: function(game) { // jugg lost
      this.prepare();
      let jugg = game.custom.memory.isJuggernaut;
      functions.alert(jugg, `Juggernaut Terminated!`, `Human battalion has destroyed your ship!`, ``, `red`, 6000, {v1: 6, v2: 4, v3: 4});
      game.ships.filter(ship => ship !== jugg).forEach(ship => {functions.alert(ship, `Mission success!`, `The Juggernaut has been eliminated!`, ``, `yellow`, 6000, {v1: 6, v2: 4, v3: 4})});
      setTimeout(() => {this.newRound("players")}, 6000);
    },
    players: function(game) { // players lost
      this.prepare();
      let jugg = game.custom.memory.isJuggernaut;
      functions.alert(jugg, `Control Stations secured!`, `Human battle stations have been suppressed!`, ``, `yellow`, 6000, {v1: 6, v2: 4, v3: 4});
      game.ships.filter(ship => ship !== jugg).forEach(ship => {functions.alert(ship, `Mission failed!`, `The Juggernaut has captured the Control Stations!`, ``, `red`, 6000, {v1: 6, v2: 4, v3: 4})});
      setTimeout(() => {this.newRound("juggernaut")}, 6000);
    },
    newRound: function(winner) {
      if (game.custom.memory.roundsResults.length-1 === gameOptions.roundsAmount) {
        setTimeout(() => {
          for (let ship of game.ships) {
            ship.gameover({
              "Score":ship.score==0?"0":ship.score,
              /*" ":" ",
              ...roundsResults.map((value, index) => {
                return [`Round ${index + 1}\n${value.pointsCaptured.map(el => el).join(",")}`];
              }).flat(Infinity),*/
              winner:"won the match"
            });
          }
        }, 4000);
      } else {
        functions.removeJuggernaut(game.custom.memory.isJuggernaut);
        if (game.custom.memory.isFlagShip) functions.removeFlagShip(game.custom.memory.isFlagShip);
        for (let ship of game.ships) functions.spawn(ship);
        game.custom.memory.roundsResults.push(winner);
        /*game.custom.memory.roundsResults.push({
          winner: winner,
          pointsCaptured: Object.entries(game.custom.memory.pointsInfo).map(([key, value]) => {
            return {[functions.findRealName(key)]: value.captureState};
          })
        });*/
        setTimeout(() => {
          functions.normalStart();
        }, 4000);
      }
    }
  }
};

var points = {
  points: {
    0: {x:200, y:200},
    1: {x:-430, y:410},
    2: {x:-105, y:-260}
  },
  distance: function(e, t) {
    return Math.sqrt(e * e + t * t)
  },
  shortestPath: function(shipx, shipy, pointx, pointy) {
    var map = 5 * 100;
    var values = [
        [pointx - shipx, pointy - shipy],
        [pointx + 2 * map - shipx, pointy - shipy],
        [pointx - 2 * map - shipx, pointy - shipy],
        [pointx - shipx, pointy + 2 * map - shipy],
        [pointx - shipx, pointy - 2 * map - shipy],
        [pointx + 2 * map - shipx, pointy + 2 * map - shipy],
        [pointx + 2 * map - shipx, pointy - 2 * map - shipy],
        [pointx - 2 * map - shipx, pointy + 2 * map - shipy],
        [pointx - 2 * map - shipx, pointy - 2 * map - shipy]
      ];
    let s = 1 / 0, r = [0, 0];
    for (let i = 0; i < values.length; i++) {
      var dist = this.distance(values[i][0], values[i][1]);
      dist < s && (s = dist, r = values[i])
    }
    return r
  },
  addPath: function(type, ship, point, value, color="200,200,200") {
    var path = this.shortestPath(ship.x, ship.y, point.x, point.y)
    var distance = this.distance(path[0], path[1])
    const visuals = (type==="juggernaut") ?
    {type: "box", position: [38.5, 44, 23, 40], fill: `rgba(${color}, 0.6)`, stroke: "#CDE", width: 2} :
    {type: "round", position: [36.5, 40, 27.5, 47.5], fill: `rgba(${color}, 0.6)`, stroke: "#CDE", width: 2}
    ship.setUIComponent({
      id: `path${type}${value}`,
      position: [45 + path[0] / distance * 25, 45 - path[1] / distance * 25, 8, 8],
      clickable: false,
      visible: true,
      components: [
        visuals,
        {type: "text", position: [0, 46, 100, 38], value: value, color: "#CDE", align: "center"}
      ]
    })
  },
  allCaptured: function() {
    let capCount = 0;
    for (let i = 0; i < 3; i++) {
      if (game.custom.memory.pointsInfo[i].captureState <= 0) {
        capCount++;
      }
    }
    return capCount === 3;
  },
  manage: function(ID) {
    var state;
    var memory = game.custom.memory;
    var memoUI = memory.pointsInfo[ID];
    var capState = memoUI.captureState;
    if (capState > 99) {
      state = 0;
      memory.pointsInfo[ID].captureState -= gameOptions.captureSpeed;
      memory.radarBackground.components[ID].stroke = `RGBA(${gameOptions.teams[1].color}, 0.6)`;
      memoUI.UI.components[0].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
      memoUI.UI.components[0].stroke = `RGBA(${gameOptions.teams[1].color}, 1)`;
      memoUI.UI.components[1].position[2] = (capState/100)*97;
      memoUI.UI.components[1].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
      memoUI.UI.components[2].fill = `RGBA(${gameOptions.teams[1].color}, 1)`;
      memoUI.UI.components[3].color = "#ffffff";
      memoUI.UI.components[4].value = `${capState}%`;
      memoUI.UI.components[5].value = `🔒️`;
    } else if (capState <= 99 && capState > 0) {
      state = 1;
      memory.pointsInfo[ID].captureState -= gameOptions.captureSpeed;
      capState = capState >= 0 ? capState : 0;
      memory.radarBackground.components[ID].stroke = `RGBA(${gameOptions.colors.gettingCaptured[0]}, 0.6)`;
      memoUI.UI.components[0].fill = `RGBA(${gameOptions.colors.gettingCaptured[0]}, 0.6)`;
      memoUI.UI.components[0].stroke = `RGBA(${gameOptions.colors.gettingCaptured[0]}, 1)`;
      memoUI.UI.components[1].position[2] = (capState/100)*97;
      memoUI.UI.components[1].fill = `RGBA(${gameOptions.colors.gettingCaptured[1]}, 1)`;
      memoUI.UI.components[2].fill = `RGBA(${gameOptions.colors.gettingCaptured[0]}, 1)`;
      memoUI.UI.components[3].color = `RGBA(${gameOptions.colors.gettingCaptured[2]}, 1)`;
      memoUI.UI.components[4].value = `${capState}%`;
      memoUI.UI.components[5].value = `🛡️`;
    } else {
      state = 2;
      memory.radarBackground.components[ID].stroke = `RGBA(${gameOptions.teams[0].color}, 0.6)`;
      memoUI.UI.components[0].fill = `RGBA(${gameOptions.teams[0].color}, 1)`;
      memoUI.UI.components[0].stroke = `RGBA(${gameOptions.teams[0].color}, 1)`;
      memoUI.UI.components[1].position[2] = 0;
      memoUI.UI.components[1].fill = `RGBA(${gameOptions.teams[0].color}, 1)`;
      memoUI.UI.components[2].fill = `RGBA(${gameOptions.teams[0].color}, 1)`;
      memoUI.UI.components[3].color = "#ffffff";
      memoUI.UI.components[4].value = `Captured`;
      memoUI.UI.components[5].value = `⚠️`;
    }
    this.updateEverything(ID,state);
  },
  updateEverything: function(ID, state) {
    game.setUIComponent(game.custom.memory.radarBackground);
    game.setUIComponent(game.custom.memory.pointsInfo[ID].UI);
    this.primPoint(ID, state);
  },
  primPoint: function(ID, state) {
    for (let k of Object.keys(this.points).map(Number).filter(i => i !== state)) {
      game.setObject({
        id: `point_${ID}-${k}`,
        type: {
          id: `point_${ID}-${k}`,
          obj: "https://raw.githubusercontent.com/LGamingOfficial/starblast/main/plane.obj",
          emissive: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/images/controlPoint.png",
          emissiveColor: 0xFFFFFF,
          shininess: 10
        },
        position: {x:this.points[ID].x, y:this.points[ID].y,z:-5},
        rotation: {x:Math.PI/2,y:Math.PI/4,z:0},
        scale: {x:0,y:0,z:0},
      });
    }
    game.setObject({
      id: `point_${ID}-${state}`,
      type: {
        id: `point_${ID}-${state}`,
        obj: "https://raw.githubusercontent.com/LGamingOfficial/starblast/main/plane.obj",
        emissive: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/images/controlPoint.png",
        emissiveColor: 0xFFFFFF,
        shininess: 10
      },
      position: {x:this.points[ID].x, y:this.points[ID].y,z:-5},
      rotation: {x:Math.PI/2,y:Math.PI/4,z:0},
      scale: {x:30,y:30,z:30},
    });
  },
  create: function() {
    Object.entries(this.points).forEach(([key, value], index) => {
      game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("round",value.x,value.y,30,30,`RGBA(${gameOptions.teams[1].color}, 0.6)`));
      const list = [0xF10D0D, 0xFFFFFF, 0x36F108];
      for (let color of list) {
        game.setObject({
          id: `point_${key}-${list.indexOf(color)}`,
          type: {
            id: `point_${key}-${list.indexOf(color)}`,
            obj: "https://raw.githubusercontent.com/LGamingOfficial/starblast/main/plane.obj",
            emissive: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/images/controlPoint.png",
            emissiveColor: color,
            shininess: 10
          },
          position: {x:value.x, y:value.y,z:-5},
          rotation: {x:Math.PI/2,y:Math.PI/4,z:0},
          scale: list.indexOf(color)===0?{x:30,y:30,z:30}:{x:0,y:0,z:0},
        });
      }
      game.setObject({
        id: `station_${key}`,
        type: {
          id: `station_${key}`,
          obj: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/objects/controlStation.obj",
          diffuse: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/textures/shipTextures.png",
          bump: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/textures/shipTextures.png",
          specular: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/textures/specularShipTextures.png",
          specularColor: 0xffffff,
          transparent: false,
          shininess: 100
        },
        position: {x:value.x, y:value.y, z:-17.5},
        scale: {x:10, y:10, z:10},
        rotation: {x:0, y:Math.PI/2, z:0},
      });
    });
  },
  prepareUI: function() {
    const memory = game.custom.memory;
    Object.entries(memory.pointsInfo).forEach(([key, value], i) => {
      memory.pointsInfo[key].UI = {
        id: `pointUI_${key}`,
        position: [24+(17.5*i+1), 10, 16, 5],
        clickable: false,
        visible: true,
        components: [
          {type: "box", position: [1, 10, 98, 78], stroke: "#cf3131", width: 4, fill:"#cf3131"},
          {type: "box", position: [1.75, 13, (value.captureState/100)*97, 72], fill: "#cf3131"},
          {type: "round", position: [41, 0, 18, 100], fill: "#cf3131"},
          {type: "text", position: [i==2?-1:0, 0, 100, 100], align: "center", value: this.findRealName(i), color: "#ffffff"},
          {type: "text", position: [3, 21.77, 100, 56], align: "left", value: `${value.captureState}%`, color: "#ffffff"},
          {type: "text", position: [0, 21.77, 97, 56], align: "right", value: `🔒`, color: "#ffffff"}
        ]
      }
    });
  },
  findRealName: function(i) {
    const names = ["A", "B", "C", "D", "E"];
    return names[i] || "";
  },
  getCapColor: function(capState) {
    switch(true) {
      case capState > 99: return "207, 49, 49";
      case capState <= 99 && capState > 0: return "255, 255, 255";
      case capState <= 0: return "13, 191, 25";
    }
  },
  pointsLocation: function(ship, x, y, radius) {
    return (Math.sqrt(Math.pow((ship.x - x), 2) + Math.pow((ship.y - y), 2)) <= radius);
  }
}

function spawnObjects() {
  // Added spawn images + text
  game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("text",17,-452,20,20,"rgba(255,20,20,1)","Spawn"));
  game.setObject({
    id: "spawn",
    type: {
      id: "spawn",
      obj: "https://raw.githubusercontent.com/LGamingOfficial/starblast/main/plane.obj",
      emissive: "https://raw.githubusercontent.com/ThuliuxytGH/Starblast-Juggernaut-Mod/main/images/gottofight.png"
    },
    position: {x:0, y:-412,z:-5},
    rotation: {x:Math.PI/2,y:Math.PI,z:0},
    scale: {x:28,y:1,z:7.8},
  });
  // generates the cubes with the correct radar image
  function addCube(id, x, y, scale, rotation, spot=true) {
    if (spot) game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("box", x, y, scale, scale, "rgba(255,20,20,0.6)"));
    game.setObject({
      id: id,
      type: {
        id: "cube",
        obj: "https://raw.githubusercontent.com/pmgl/starblast-modding/master/objects/cube/cube.obj",
        diffuse: "https://raw.githubusercontent.com/pmgl/starblast-modding/master/objects/cube/diffuse.jpg",
        emissive: "https://raw.githubusercontent.com/pmgl/starblast-modding/master/objects/cube/emissive.jpg",
        bump: "https://raw.githubusercontent.com/pmgl/starblast-modding/master/objects/cube/bump.jpg",
        specularColor: 0xFF8040,
        shininess: 0,
        physics: {
          mass: 100,
          shape: [2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.308,3.048,2.878,2.759,2.697,2.697,2.759,2.878,3.048,3.308,3.672,3.678,3.474,3.169,2.958,2.806,2.723,2.682,2.723,2.806,2.958,3.169,3.474,3.678,3.672,3.307,3.054,2.878,2.761,2.698,2.698,2.761,2.878,3.054,3.307,3.672,3.678,3.474,3.169,2.958,2.806,2.723],
          fixed: true
        },
      },
      position: {x:x, y:y,z:0},
      rotation: rotation,
      scale: {x:scale,y:scale,z:scale},
    });
  };
  // edges
  addCube("cubeC1", 55, -395, 1.9, {x:Math.PI,y:0,z:0});
  addCube("cubeC2", -55, -395, 1.9, {x:Math.PI,y:0,z:0});
  addCube("cubeC3", 55, -475, 1.9, {x:Math.PI,y:0,z:0});
  addCube("cubeC4", -55, -475, 1.9, {x:Math.PI,y:0,z:0});
  // top and bottom line
  game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("box",-40,-396,1.4+21,1.4,"rgba(255,20,20,0.6)"));
  game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("box",-40,-476,1.4+21,1.4,"rgba(255,20,20,0.6)"));
  for (let i = -49; i<=50; i+=7) {
    addCube(`cubeTop${i}`, i, -395, 1.4, {x:Math.PI/2,y:Math.PI,z:Math.PI*1.5}, false);
    addCube(`cubeBottom${i}`, i, -475, 1.4, {x:Math.PI/2,y:Math.PI,z:Math.PI*1.5}, false);
  }
  // left and right line
  game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("box",56,-405,1.4,1.4+15,"rgba(255,20,20,0.6)"));
  game.custom.memory.radarBackground.components.push(functions.radarPos.addRadarSpot("box",-54,-405,1.4,1.4+15,"rgba(255,20,20,0.6)"));
  for (let i=-400; i>=-475; i-=7) {
    addCube(`cubeLeft${i}`, 55, i, 1.4, {x:Math.PI,y:Math.PI/2,z:Math.PI}, false);
    addCube(`cubeRight${i}`, -55, i, 1.4, {x:Math.PI,y:Math.PI/2,z:Math.PI}, false);
  }
}

this.tick = function(game) {
  if (game.step % 60 === 0) {
    
    functions.updateScoreboard(game);
    
    if (game.custom.gameEnded === true) {
      for (let ship of game.ships) {
        for (let i = 0; i < Object.keys(points.points).length; i++) ship.setUIComponent({id: `pathpoints${points.findRealName(i)}`,position: [0,0,0,0],visible: false});
        ship.setUIComponent({id: `pathjuggernaut👾`,position: [0,0,0,0],visible: false});
        functions.healthBar.updateUI(ship, false);
      }
      return;
    }
    
    if (points.allCaptured() && game.custom.memory.isJuggernaut !== null) {
      functions.win.players(game);
    }
    
    for (let i = 0; i < Object.keys(points.points).length; i++) {
      points.addPath("points", game.custom.memory.isJuggernaut, {x:points.points[i].x,y:points.points[i].y}, points.findRealName(i), points.getCapColor(game.custom.memory.pointsInfo[i].captureState));
      if (points.pointsLocation(game.custom.memory.isJuggernaut, points.points[i].x, points.points[i].y, 48)) {
        points.manage(i);
      } 
    }
    
    for (let ship of game.ships.filter(ship => ship !== game.custom.memory.isJuggernaut)) {
      if ((game.custom.memory.isJuggernaut !== null || game.custom.memory.isJuggernaut !== undefined) && game.custom.gameEnded === false) {
        functions.healthBar.updateUI(ship, true);
        points.addPath("juggernaut", ship, game.custom.memory.isJuggernaut, "👾", "13, 255, 25");
      }
    }
    
  }
  
  if (game.step % 20 === 0) {
    if (game.custom.memory.isJuggernaut === null) {
      const newJugg = functions.random(functions.getPlayers());
      functions.selectJuggernaut(newJugg);
    }
  }
  
  if (game.step % 5 === 0) {
    for (let ship of game.ships) {
      if ((ship.x < 50 && ship.x > -50 && ship.y < -400 && ship.y > -420) && ship.custom.isOutOfSpawn === false) {
        functions.outOfSpawn(ship);
      }
    }
  }
};

this.event = function(event, game) {
  switch (event.name) {
    case "ui_component_clicked":
      if (event.id.includes("shipSwitch")) {
        functions.buttons[event.id.split("|")[0]].action(event.ship, event.id.split("|")[1]);
      } else {
        functions.abilities[event.id].action(event.ship);
      }
      break;
    case "ship_spawned":
      functions.spawn(event.ship);
      break;
    case "ship_destroyed":
      if (game.custom.memory.isJuggernaut === event.ship) {
        functions.win.jugg(game);
      }
      if (game.custom.memory.isFlagShip === event.ship) {
        functions.removeFlagShip(event.ship);
      }
      break;
  }
};

function prepareGame() {
  const { echo } = game.modding.terminal;
  const maxLength = Math.max(...Object.keys(gameOptions.info).map(key => key.length));
  echo(`\n[[i;#ff7070;]  Staring % Initializing...]\n`);
  Object.keys(gameOptions.info).forEach((key, index) => {
    const formattedKey = `${key.charAt(0).toUpperCase() + key.substring(1)}:`.padEnd(maxLength + 2);
    echo(`[[i;Cyan;]     ${formattedKey}] [[i;Gold;]${gameOptions.info[key]}]`);
  });
  
  // do tests
  echo(`\n[[i;#ffb670;]  Procecutive Order % Starting]`);
  
  try {
    
    game.custom.memory = {
      radarBackground: {
        id:"radar_background",
        position:[0,0,100,100],
        visible: true,
        components: []
      },
      shipsInfo: gameOptions.ships.map(str => {
        const jsedStr = JSON.parse(str);
        return jsedStr;
      }),
      isJuggernaut: undefined,
      juggShield: 999999,
      juggType: functions.random(gameOptions.teams[0].ships),
      isFlagShip: undefined,
      pointsInfo: {},
      roundsResults: []
    };
    
    for (let i = 0; i < Object.keys(points.points).length; i++) {
      game.custom.memory.pointsInfo[i] = {
        captureState: 100,
        UI: {}
      };
    }
    
    gameCommands.resolveCommands();
    points.create();
    points.prepareUI();
    spawnObjects();
    
  } catch (e) {
    echo(`\n[[i;#ff7373;]  Starting Failed % ${e}]\n`);
    return; // stop if game failed to load
  }
  
  // continue if started properly
  echo(`\n[[i;#85ff70;]  Started % Log-enabled\n`);
  game.custom.started = true;
  game.custom.initialized = false;
  game.custom.memory.juggShield = 999999;
  game.custom.gameEnded = false;
  setTimeout(() => echo(`\n[[ig;#85ff70;]Write] [[g;Gold;]<info commands>] [[ig;#85ff70;]in the console]\n[[ig;Cyan;]For more information on the mod and its integrated commands.]\n`), 2000);
}
