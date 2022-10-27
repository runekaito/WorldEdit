import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
command.register("wand", "description").overload((p, o, op) => {
  const player = o.getEntity() as ServerPlayer;
  if (player.hasTag("wand")) {
    player.removeTag("wand");
  } else {
    player.addTag("wand");
    player.sendMessage(
      "§l§dLeft click: select pos #1; Right click: select pos #2"
    );
    player.runCommand("give @s wooden_axe");
  }
}, {});
