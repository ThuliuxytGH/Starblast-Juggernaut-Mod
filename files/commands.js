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
