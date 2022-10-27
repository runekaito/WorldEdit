"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const fs = require("fs");
const Edit_1 = require("../Data/Edit");
const fill_1 = require("../Block/fill");
const nativetype_1 = require("bdsx/nativetype");
let path = "../json/WorldEdit.json";
command_1.command.register("replace", "description").overload((p, o, op) => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGFjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcGxhY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBdUM7QUFDdkMseUJBQXlCO0FBRXpCLHVDQUF3QztBQUN4Qyx3Q0FBcUM7QUFDckMsZ0RBQTRDO0FBQzVDLElBQUksSUFBSSxHQUFRLHdCQUF3QixDQUFDO0FBQ3pDLGlCQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQ2pELENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRTtJQUNYLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQWtCLENBQUM7SUFDdkMsRUFBRSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5QixJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3RCLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRCxJQUFJLEdBQUcsR0FBRyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFOztRQUNuRCxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUksTUFBQSxDQUFDLENBQUMsU0FBUyxFQUFFLDBDQUFFLE9BQU8sRUFBRSxDQUFBLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDakQsSUFBQSxXQUFJLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDLEVBQ0Q7SUFDRSxLQUFLLEVBQUUsc0JBQVM7SUFDaEIsWUFBWSxFQUFFLHNCQUFTO0NBQ3hCLENBQ0YsQ0FBQyJ9