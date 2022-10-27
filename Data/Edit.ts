import * as fs from "fs";
export function EditData(path: any, EditNum: number, ev: any) {
  let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
  let data_arr: any[] = [];
  let jsi = jsonObject.masterData;
  if (EditNum == 1) {
    for (const i in jsi) {
      if (ev.player.getName() == jsi[i].Name) {
        jsi[i].pos1x = ev.blockPos.x;
        jsi[i].pos1y = ev.blockPos.y;
        jsi[i].pos1z = ev.blockPos.z;
      }
      data_arr.push(jsi[i]);
    }
  }
  if (EditNum == 2) {
    for (const i in jsi) {
      if (ev.actor.getName() == jsi[i].Name) {
        jsi[i].pos2x = ev.x;
        jsi[i].pos2y = ev.y;
        jsi[i].pos2z = ev.z;
      }
      data_arr.push(jsi[i]);
    }
  }
  if (EditNum == 3) {
    for (const i in jsi) {
      if (ev.getName() == jsi[i].Name) {
        jsi[i].cmd = ev.deviceId;
      }
      data_arr.push(jsi[i]);
    }
  }
  if (EditNum == 4) {
    for (const i in jsi) {
      if (ev == jsi[i].Name) {
        jsi[i].pos1x = null;
        jsi[i].pos1y = null;
        jsi[i].pos1z = null;
        jsi[i].pos2x = null;
        jsi[i].pos2y = null;
        jsi[i].pos2z = null;
      }
      data_arr.push(jsi[i]);
    }
  }
  let masterData: string = JSON.stringify({ masterData: data_arr }, null, " ");
  fs.writeFileSync(path, masterData);
}
