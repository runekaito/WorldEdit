"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("bdsx/event");
const Add_1 = require("../Data/Add");
const Edit_1 = require("../Data/Edit");
const Search_1 = require("../Data/Search");
let path = "../json/WorldEdit.json";
event_1.events.itemUseOnBlock.on((ev) => {
    const player = ev.actor;
    if (player.getMainhandSlot().getName() != "minecraft:wooden_axe")
        return;
    if ((0, Search_1.SearchData)(path, 2, ev)) {
        (0, Edit_1.EditData)(path, 2, ev);
    }
    else {
        let x = parseInt(ev.x.toString());
        let y = parseInt(ev.y.toString());
        let z = parseInt(ev.z.toString());
        let data = {
            Name: ev.actor.getName(),
            pos1x: null,
            pos1y: null,
            pos1z: null,
            pos2x: x,
            pos2y: y,
            pos2z: z,
            copy: false,
        };
        (0, Add_1.AddData)(path, data);
    }
    player.sendMessage("§l§dSecond position set to <" + ev.x + ", " + ev.y + ", " + ev.z + ">");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwbGFjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFvQztBQUVwQyxxQ0FBc0M7QUFDdEMsdUNBQXdDO0FBQ3hDLDJDQUE0QztBQUM1QyxJQUFJLElBQUksR0FBUSx3QkFBd0IsQ0FBQztBQUN6QyxjQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFO0lBQzlCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFxQixDQUFDO0lBQ3hDLElBQUksTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLHNCQUFzQjtRQUFFLE9BQU87SUFDekUsSUFBSSxJQUFBLG1CQUFVLEVBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtRQUMzQixJQUFBLGVBQVEsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZCO1NBQU07UUFDTCxJQUFJLENBQUMsR0FBWSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxHQUFZLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQVksUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRztZQUNULElBQUksRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUN4QixLQUFLLEVBQUUsSUFBSTtZQUNYLEtBQUssRUFBRSxJQUFJO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxLQUFLLEVBQUUsQ0FBQztZQUNSLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7WUFDUixJQUFJLEVBQUUsS0FBSztTQUNaLENBQUM7UUFDRixJQUFBLGFBQU8sRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckI7SUFDRCxNQUFNLENBQUMsV0FBVyxDQUNoQiw4QkFBOEIsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FDeEUsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIn0=