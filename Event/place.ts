import { ServerPlayer } from "bdsx/bds/player";
import { events } from "bdsx/event";
import { int32_t } from "bdsx/nativetype";
import { AddData } from "../Data/Add";
import { EditData } from "../Data/Edit";
import { SearchData } from "../Data/Search";
let path: any = "../json/WorldEdit.json";
events.itemUseOnBlock.on((ev) => {
  const player = ev.actor as ServerPlayer;
  if (player.getMainhandSlot().getName() != "minecraft:wooden_axe") return;
  if (SearchData(path, 2, ev)) {
    EditData(path, 2, ev);
  } else {
    let x: int32_t = parseInt(ev.x.toString());
    let y: int32_t = parseInt(ev.y.toString());
    let z: int32_t = parseInt(ev.z.toString());
    let data = {
      Name: ev.actor.getName(),
      pos1x: null,
      pos1y: null,
      pos1z: null,
      pos2x: x,
      pos2y: y,
      pos2z: z,
      copy: false,
    };
    AddData(path, data);
  }
  player.sendMessage(
    "§l§dSecond position set to <" + ev.x + ", " + ev.y + ", " + ev.z + ">"
  );
});
