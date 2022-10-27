"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchData = void 0;
const fs = require("fs");
function SearchData(path, SearchNum, ev) {
    let jsonObject = JSON.parse(fs.readFileSync(path, "utf8")).masterData;
    let check = false;
    if (SearchNum == 1) {
        jsonObject.filter((item) => {
            if (ev.player.getName() == item.Name) {
                check = true;
            }
        });
    }
    if (SearchNum == 2) {
        jsonObject.filter((item) => {
            if (ev.actor.getName() == item.Name) {
                check = true;
            }
        });
    }
    return check;
}
exports.SearchData = SearchData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiU2VhcmNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUV6QixTQUFnQixVQUFVLENBQUMsSUFBUyxFQUFFLFNBQWlCLEVBQUUsRUFBTztJQUM5RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3RFLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNsQixJQUFJLFNBQVMsSUFBSSxDQUFDLEVBQUU7UUFDbEIsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO1lBQzlCLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNwQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQ0QsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2xCLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUM5QixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQWxCRCxnQ0FrQkMifQ==