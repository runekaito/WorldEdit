"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const fs = require("fs");
let path = "../json/WorldEdit.json";
command_1.command.register("redo", "description").overload((p, o, op) => {
    var _a;
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item) => {
        var _a;
        return item.Name == ((_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.getName());
    });
    for (const i in jsi) {
        (_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.runCommand(jsi[i].cmd);
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVkby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwwQ0FBdUM7QUFDdkMseUJBQXlCO0FBQ3pCLElBQUksSUFBSSxHQUFRLHdCQUF3QixDQUFDO0FBQ3pDLGlCQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFOztJQUM1RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFJLE1BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSwwQ0FBRSxPQUFPLEVBQUUsQ0FBQSxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDbkIsTUFBQSxDQUFDLENBQUMsU0FBUyxFQUFFLDBDQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDdkM7QUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMifQ==