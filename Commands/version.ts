import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
command.register("version", "description").overload((p, o, op) => {
  const player = o.getEntity() as ServerPlayer;
  player.sendMessage("§l§3WorldEdit: §fv1.0");
}, {});
