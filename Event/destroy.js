"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("bdsx/common");
const event_1 = require("bdsx/event");
const fs = require("fs");
const Add_1 = require("../Data/Add");
const Edit_1 = require("../Data/Edit");
const Search_1 = require("../Data/Search");
let path = "../json/WorldEdit.json";
if (!fs.existsSync(path))
    fs.writeFileSync(path, JSON.stringify({ masterData: [] }), "utf8");
event_1.events.blockDestroy.on((ev) => {
    if (ev.player.getMainhandSlot().getName() != "minecraft:wooden_axe")
        return;
    if ((0, Search_1.SearchData)(path, 1, ev)) {
        (0, Edit_1.EditData)(path, 1, ev);
    }
    else {
        let x = parseInt(ev.blockPos.x.toString());
        let y = parseInt(ev.blockPos.y.toString());
        let z = parseInt(ev.blockPos.toString());
        let data = {
            Name: ev.player.getName(),
            cmd: null,
            pos1x: x,
            pos1y: y,
            pos1z: z,
            pos2x: null,
            pos2y: null,
            pos2z: null,
            copy: false,
        };
        (0, Add_1.AddData)(path, data);
    }
    ev.player.sendMessage("§l§dFirst position set to <" +
        ev.blockPos.x +
        ", " +
        ev.blockPos.y +
        ", " +
        ev.blockPos.z +
        ">");
    return common_1.CANCEL;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVzdHJveS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlc3Ryb3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBcUM7QUFDckMsc0NBQW9DO0FBRXBDLHlCQUF5QjtBQUN6QixxQ0FBc0M7QUFDdEMsdUNBQXdDO0FBQ3hDLDJDQUE0QztBQUM1QyxJQUFJLElBQUksR0FBUSx3QkFBd0IsQ0FBQztBQUN6QyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDdEIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBRXJFLGNBQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7SUFDNUIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLHNCQUFzQjtRQUFFLE9BQU87SUFDNUUsSUFBSSxJQUFBLG1CQUFVLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMzQixJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO1NBQU07UUFDTCxJQUFJLENBQUMsR0FBWSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBWSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsR0FBWSxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksSUFBSSxHQUFHO1lBQ1QsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3pCLEdBQUcsRUFBRSxJQUFJO1lBQ1QsS0FBSyxFQUFFLENBQUM7WUFDUixLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsSUFBSSxFQUFFLEtBQUs7U0FDWixDQUFDO1FBQ0YsSUFBQSxhQUFPLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3JCO0lBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQ25CLDZCQUE2QjtRQUMzQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDYixJQUFJO1FBQ0osRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2IsSUFBSTtRQUNKLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNiLEdBQUcsQ0FDTixDQUFDO0lBQ0YsT0FBTyxlQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDLENBQUMifQ==