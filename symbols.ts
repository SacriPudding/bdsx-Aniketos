//import { Actor, RawTypeId } from "bdsx";
import { Player } from "bdsx/bds/player";
import { NativePointer, pdb, VoidPointer } from "bdsx/core";
import { ProcHacker } from "bdsx/prochacker";

import * as path from "path";
import { Actor } from "../bdsx/bds/actor";
import { UNDNAME_NAME_ONLY } from "../bdsx/dbghelp";
import { bool_t } from "../bdsx/nativetype";

const hacker = ProcHacker.load(path.join(__dirname, "pdbcache.ini"), [
    "EnchantmentInstance::EnchantmentInstance",
    "Mob::isSprinting",
], UNDNAME_NAME_ONLY);
pdb.setOptions(0);
pdb.close();

export const Mob$isSprinting = hacker.js("Mob::isSprinting", bool_t, null, Actor);

{
    // let hook = hacker.hooking("EnchantmentInstance::EnchantmentInstance", RawTypeId.Void, null, NativePointer, NativePointer, RawTypeId.Int32)((instance: NativePointer, type: NativePointer, level: number) => {
    //     console.log("ench", level);
    //     hook(instance, type, level);
    // });
}