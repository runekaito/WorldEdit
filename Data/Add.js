"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddData = void 0;
const fs = require("fs");
function AddData(path, data) {
    let data_arr = JSON.parse(fs.readFileSync(path, "utf8")).masterData;
    data_arr.push(data);
    let masterData = JSON.stringify({ masterData: data_arr }, null, " ");
    fs.writeFileSync(path, masterData);
}
exports.AddData = AddData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWRkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQWRkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlCQUF5QjtBQUN6QixTQUFnQixPQUFPLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDMUMsSUFBSSxRQUFRLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMzRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLElBQUksVUFBVSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzdFLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFMRCwwQkFLQyJ9