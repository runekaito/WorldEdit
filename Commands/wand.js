"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
command_1.command.register("wand", "description").overload((p, o, op) => {
    const player = o.getEntity();
    if (player.hasTag("wand")) {
        player.removeTag("wand");
    }
    else {
        player.addTag("wand");
        player.sendMessage("§l§dLeft click: select pos #1; Right click: select pos #2");
        player.runCommand("give @s wooden_axe");
    }
}, {});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndhbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwwQ0FBdUM7QUFDdkMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7SUFDNUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBa0IsQ0FBQztJQUM3QyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQjtTQUFNO1FBQ0wsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixNQUFNLENBQUMsV0FBVyxDQUNoQiwyREFBMkQsQ0FDNUQsQ0FBQztRQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQztLQUN6QztBQUNILENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyJ9