import * as fs from "fs";

export function SearchData(path: any, SearchNum: number, ev: any) {
  let jsonObject = JSON.parse(fs.readFileSync(path, "utf8")).masterData;
  let check = false;
  if (SearchNum == 1) {
    jsonObject.filter((item: any) => {
      if (ev.player.getName() == item.Name) {
        check = true;
      }
    });
  }
  if (SearchNum == 2) {
    jsonObject.filter((item: any) => {
      if (ev.actor.getName() == item.Name) {
        check = true;
      }
    });
  }
  return check;
}
