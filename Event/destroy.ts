import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { int32_t } from "bdsx/nativetype";
import * as fs from "fs";
import { AddData } from "../Data/Add";
import { EditData } from "../Data/Edit";
import { SearchData } from "../Data/Search";
let path: any = "../json/WorldEdit.json";
if (!fs.existsSync(path))
  fs.writeFileSync(path, JSON.stringify({ masterData: [] }), "utf8");

events.blockDestroy.on((ev) => {
  if (ev.player.getMainhandSlot().getName() != "minecraft:wooden_axe") return;
  if (SearchData(path, 1, ev)) {
    EditData(path, 1, ev);
  } else {
    let x: int32_t = parseInt(ev.blockPos.x.toString());
    let y: int32_t = parseInt(ev.blockPos.y.toString());
    let z: int32_t = parseInt(ev.blockPos.toString());
    let data = {
      Name: ev.player.getName(),
      cmd: null,
      pos1x: x,
      pos1y: y,
      pos1z: z,
      pos2x: null,
      pos2y: null,
      pos2z: null,
      copy: false,
    };
    AddData(path, data);
  }
  ev.player.sendMessage(
    "§l§dFirst position set to <" +
      ev.blockPos.x +
      ", " +
      ev.blockPos.y +
      ", " +
      ev.blockPos.z +
      ">"
  );
  return CANCEL;
});
