"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const Edit_1 = require("../Data/Edit");
const fs = require("fs");
const fill_1 = require("../Block/fill");
const nativetype_1 = require("bdsx/nativetype");
let path = "../json/WorldEdit.json";
command_1.command.register("set", "description").overload((p, o, op) => {
    let ev = o.getEntity();
    ev.deviceId = "set " + p.block;
    (0, Edit_1.EditData)(path, 3, ev);
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8"));
    let jsi = jsonObject.masterData.filter((item) => {
        var _a;
        return item.Name == ((_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.getName());
    });
    (0, fill_1.fill)(jsi, o, p);
}, {
    block: nativetype_1.CxxString,
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMENBQXVDO0FBQ3ZDLHVDQUF3QztBQUN4Qyx5QkFBeUI7QUFDekIsd0NBQXFDO0FBQ3JDLGdEQUE0QztBQUM1QyxJQUFJLElBQUksR0FBUSx3QkFBd0IsQ0FBQztBQUN6QyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUM3QyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDWCxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFrQixDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsTUFBTSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0IsSUFBQSxlQUFRLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0QixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxHQUFHLEdBQUcsVUFBVSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTs7UUFDbkQsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFJLE1BQUEsQ0FBQyxDQUFDLFNBQVMsRUFBRSwwQ0FBRSxPQUFPLEVBQUUsQ0FBQSxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBQSxXQUFJLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDLEVBQ0Q7SUFDRSxLQUFLLEVBQUUsc0JBQVM7Q0FDakIsQ0FDRixDQUFDIn0=