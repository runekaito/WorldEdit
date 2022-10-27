import * as fs from "fs";

let path: any = "../json/WorldEdit.json";
if (!fs.existsSync(path))
  fs.writeFileSync(path, JSON.stringify({ masterData: [] }), "utf8");
