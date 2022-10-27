import * as fs from "fs";
export function AddData(path: any, data: any) {
  let data_arr: any[] = JSON.parse(fs.readFileSync(path, "utf8")).masterData;
  data_arr.push(data);
  let masterData: string = JSON.stringify({ masterData: data_arr }, null, " ");
  fs.writeFileSync(path, masterData);
}
