import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { int32_t } from "bdsx/nativetype";
import { black } from "colors";
import * as fs from "fs";
import { EditData } from "../Data/Edit";
let path: any = "../json/WorldEdit.json";
command.register("move", "description").overload(
  (p, o, op) => {
    const player = o.getEntity() as ServerPlayer;
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item: any) => {
      return item.Name == o.getEntity()?.getName();
    });
    for (const i in jsi) {
      let xyz = "";
      console.log(Math.round(player.getRotation().y));
      if (player.getRotation().y > 0 && player.getRotation().y < 90) {
        console.log("1");
        xyz = jsi[i].pos1x - 5 + " " + jsi[i].pos1y + " " + jsi[i].pos1z;
      }
      if (player.getRotation().y > 91 && player.getRotation().y < 180) {
        console.log("2");
        xyz = jsi[i].pos1x + " " + jsi[i].pos1y + " " + (jsi[i].pos1z - 5);
      }
      if (player.getRotation().y > -90 && player.getRotation().y < 1) {
        console.log("3");
        xyz = jsi[i].pos1x + " " + jsi[i].pos1y + " " + jsi[i].pos1z + 5;
      }
      if (player.getRotation().y > -181 && player.getRotation().y < -91) {
        console.log("4");
        xyz = jsi[i].pos1x + 5 + " " + jsi[i].pos1y + " " + jsi[i].pos1z;
      }
      player.runCommand(
        "clone " +
          jsi[i].pos1x +
          " " +
          jsi[i].pos1y +
          " " +
          jsi[i].pos1z +
          " " +
          jsi[i].pos2x +
          " " +
          jsi[i].pos2y +
          " " +
          jsi[i].pos2z +
          " " +
          xyz
      );
      player.runCommand(
        "fill " +
          jsi[i].pos1x +
          " " +
          jsi[i].pos1y +
          " " +
          jsi[i].pos1z +
          " " +
          jsi[i].pos2x +
          " " +
          jsi[i].pos2y +
          " " +
          jsi[i].pos2z +
          " air"
      );
      let ev = player.getName();
      EditData(path, 4, ev);
    }
  },
  {
    block: int32_t,
  }
);
