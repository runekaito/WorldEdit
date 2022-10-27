import { ServerPlayer } from "bdsx/bds/player";
import { int32_t } from "bdsx/nativetype";

export async function fill(jsi: any, o: any, p: any) {
  for (const i in jsi) {
    if (
      jsi[i].pos1x != null &&
      jsi[i].pos1y != null &&
      jsi[i].pos1z != null &&
      jsi[i].pos2x != null &&
      jsi[i].pos2y != null &&
      jsi[i].pos2z != null
    ) {
      let XArea: int32_t = Math.abs(jsi[i].pos2x - jsi[i].pos1x);
      let YArea: int32_t = Math.abs(jsi[i].pos2y - jsi[i].pos1y);
      let ZArea: int32_t = Math.abs(jsi[i].pos2z - jsi[i].pos1z);
      let Area: int32_t = XArea * YArea * ZArea;
      let posX1: int32_t = jsi[i].pos1x;
      let posZ1: int32_t = jsi[i].pos1z;
      let posX2: int32_t = jsi[i].pos2x + 1;
      let posZ2: int32_t = jsi[i].pos2z;
      console.log(Area);
      console.log(XArea * YArea);
      if (Area < 32767) {
        console.log("clear 1:");
        o.getEntity()?.runCommand(
          "fill " +
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
            p.block
        );
      } else if (XArea * ZArea < 32767) {
        console.log("clear 2:");
        let posY1: int32_t = jsi[i].pos1y;
        let posY2: int32_t = jsi[i].pos2y;
        if (posY1 > posY2) {
          let Pos1y = posY1;
          posY1 = posY2;
          posY2 = Pos1y;
        }
        for (let i2; posY1 < posY2; posY1++) {
          let cmd = `tickingarea add ${posX1 - 2} ${posY1 - 2} ${posZ1 - 2} ${
            posZ2 + 2
          } ${posY1 + 2} ${posZ2 + 2} FILLEREDIT`;
          o.getEntity()?.runCommand(cmd);
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
          o.getEntity()?.runCommand(cmd);
          cmd = "tickingarea remove FILLEREDIT";
          o.getEntity()?.runCommand(cmd);
        }
      } else {
        const player = o.getEntity() as ServerPlayer;
        player.sendMessage("§cThe range is too large.");
      }
    }
  }
}
