"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const Edit_1 = require("../Data/Edit");
const fill_1 = require("../Block/fill");
const fs = require("fs");
let path = "../json/WorldEdit.json";
command_1.command.register("re", "description").overload((p, o, op) => {
    let ev = o.getEntity();
    ev.deviceId = "re " + p.block;
    (0, Edit_1.EditData)(path, 3, ev);
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item) => {
        var _a;
        return item.Name == ((_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.getName());
    });
    p.block = p.block + " replace " + p.replaceBlock;
    (0, fill_1.fill)(jsi, o, p);
}, {
    block: nativetype_1.CxxString,
    replaceBlock: nativetype_1.CxxString,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1QztBQUV2QyxnREFBNEM7QUFDNUMsdUNBQXdDO0FBQ3hDLHdDQUFxQztBQUNyQyx5QkFBeUI7QUFDekIsSUFBSSxJQUFJLEdBQVEsd0JBQXdCLENBQUM7QUFDekMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FDNUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0lBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUN2QyxFQUFFLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlCLElBQUEsZUFBUSxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEIsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQzNELElBQUksR0FBRyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7O1FBQ25ELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSSxNQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsMENBQUUsT0FBTyxFQUFFLENBQUEsQ0FBQztJQUMvQyxDQUFDLENBQUMsQ0FBQztJQUNILENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUNqRCxJQUFBLFdBQUksRUFBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsRUFDRDtJQUNFLEtBQUssRUFBRSxzQkFBUztJQUNoQixZQUFZLEVBQUUsc0JBQVM7Q0FDeEIsQ0FDRixDQUFDIn0=