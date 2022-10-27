import { command } from "bdsx/command";
import { ServerPlayer } from "bdsx/bds/player";
import { CxxString } from "bdsx/nativetype";
import { EditData } from "../Data/Edit";
import { fill } from "../Block/fill";
import * as fs from "fs";
let path: any = "../json/WorldEdit.json";
command.register("re", "description").overload(
  (p, o, op) => {
    let ev = o.getEntity() as ServerPlayer;
    ev.deviceId = "re " + p.block;
    EditData(path, 3, ev);
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item: any) => {
      return item.Name == o.getEntity()?.getName();
    });
    p.block = p.block + " replace " + p.replaceBlock;
    fill(jsi, o, p);
  },
  {
    block: CxxString,
    replaceBlock: CxxString,
  }
);
