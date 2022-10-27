"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fill = void 0;
async function fill(jsi, o, p) {
    var _a, _b, _c, _d;
    for (const i in jsi) {
        if (jsi[i].pos1x != null &&
            jsi[i].pos1y != null &&
            jsi[i].pos1z != null &&
            jsi[i].pos2x != null &&
            jsi[i].pos2y != null &&
            jsi[i].pos2z != null) {
            let XArea = Math.abs(jsi[i].pos2x - jsi[i].pos1x);
            let YArea = Math.abs(jsi[i].pos2y - jsi[i].pos1y);
            let ZArea = Math.abs(jsi[i].pos2z - jsi[i].pos1z);
            let Area = XArea * YArea * ZArea;
            let posX1 = jsi[i].pos1x;
            let posZ1 = jsi[i].pos1z;
            let posX2 = jsi[i].pos2x + 1;
            let posZ2 = jsi[i].pos2z;
            console.log(Area);
            console.log(XArea * YArea);
            if (Area < 32767) {
                console.log("clear 1:");
                (_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.runCommand("fill " +
                    jsi[i].pos1x +
                    " " +
                    jsi[i].pos1y +
                    " " +
                    jsi[i].pos1z +
                    " " +
                    jsi[i].pos2x +
                    " " +
                    jsi[i].pos2y +
                    " " +
                    jsi[i].pos2z +
                    " " +
                    p.block);
            }
            else if (XArea * ZArea < 32767) {
                console.log("clear 2:");
                let posY1 = jsi[i].pos1y;
                let posY2 = jsi[i].pos2y;
                if (posY1 > posY2) {
                    let Pos1y = posY1;
                    posY1 = posY2;
                    posY2 = Pos1y;
                }
                for (let i2; posY1 < posY2; posY1++) {
                    let cmd = `tickingarea add ${posX1 - 2} ${posY1 - 2} ${posZ1 - 2} ${posZ2 + 2} ${posY1 + 2} ${posZ2 + 2} FILLEREDIT`;
                    (_b = o.getEntity()) === null || _b === void 0 ? void 0 : _b.runCommand(cmd);
                    cmd =
                        "fill " +
                            posX1 +
                            " " +
                            posY1 +
                            " " +
                            posZ1 +
                            " " +
                            posX2 +
                            " " +
                            posY1 +
                            " " +
                            posZ2 +
                            " " +
                            p.block;
                    (_c = o.getEntity()) === null || _c === void 0 ? void 0 : _c.runCommand(cmd);
                    cmd = "tickingarea remove FILLEREDIT";
                    (_d = o.getEntity()) === null || _d === void 0 ? void 0 : _d.runCommand(cmd);
                }
            }
            else {
                const player = o.getEntity();
                player.sendMessage("§cThe range is too large.");
            }
        }
    }
}
exports.fill = fill;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR08sS0FBSyxVQUFVLElBQUksQ0FBQyxHQUFRLEVBQUUsQ0FBTSxFQUFFLENBQU07O0lBQ2pELEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO1FBQ25CLElBQ0UsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUk7WUFDcEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQ3BCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSTtZQUNwQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFDcEI7WUFDQSxJQUFJLEtBQUssR0FBWSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0QsSUFBSSxLQUFLLEdBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRCxJQUFJLElBQUksR0FBWSxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUMxQyxJQUFJLEtBQUssR0FBWSxHQUFHLENBQUMsQ0FB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