import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { EditData } from "../Data/Edit";
import * as fs from "fs";
import { fill } from "../Block/fill";
import { CxxString } from "bdsx/nativetype";
let path: any = "../json/WorldEdit.json";
command.register("set", "description").overload(
  (p, o, op) => {
    let ev = o.getEntity() as ServerPlayer;
    ev.deviceId = "set " + p.block;
    EditData(path, 3, ev);
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item: any) => {
      return item.Name == o.getEntity()?.getName();
    });
    fill(jsi, o, p);
  },
  {
    block: CxxString,
  }
);
