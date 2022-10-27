import { command } from "bdsx/command";
import * as fs from "fs";
let path: any = "../json/WorldEdit.json";
command.register("redo", "description").overload((p, o, op) => {
  let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
  let jsi = jsonObject.masterData.filter((item: any) => {
    return item.Name == o.getEntity()?.getName();
  });
  for (const i in jsi) {
    o.getEntity()?.runCommand(jsi[i].cmd);
  }
}, {});
