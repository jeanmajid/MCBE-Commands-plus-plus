// Modules

import "./modules/AEvents/blockExplode.js";
import "./modules/AEvents/buttonPush.js";
import "./modules/AEvents/chatSend.js";
import "./modules/AEvents/effectAdd.js";
import "./modules/AEvents/entityDie.js";
import "./modules/AEvents/entityHealthChanged.js";
import "./modules/AEvents/entityHitBlock.js";
import "./modules/AEvents/entityHitEntity.js";
import "./modules/AEvents/entityHurt.js";
import "./modules/AEvents/entityLoad.js";
import "./modules/AEvents/entityRemove.js";
import "./modules/AEvents/entitySpawn.js";
import "./modules/AEvents/explosion.js";
import "./modules/AEvents/gameRuleChange.js";
import "./modules/AEvents/itemCompleteUse.js";
import "./modules/AEvents/itemReleaseUse.js";
import "./modules/AEvents/itemStartUse.js";
import "./modules/AEvents/itemStartUseOn.js";
import "./modules/AEvents/itemStopUse.js";
import "./modules/AEvents/itemStopUseOn.js";
import "./modules/AEvents/itemUse.js";
import "./modules/AEvents/itemUseOn.js";
import "./modules/AEvents/leverAction.js";
import "./modules/AEvents/messageReceive.js";
import "./modules/AEvents/pistonActivate.js";
import "./modules/AEvents/playerBreakBlock.js";
import "./modules/AEvents/playerDimensionChange.js";
import "./modules/AEvents/playerGameModeChange.js";
import "./modules/AEvents/playerInteractWithBlock.js";
import "./modules/AEvents/playerInteractWithEntity.js";
import "./modules/AEvents/playerJoin.js";
import "./modules/AEvents/playerLeave.js";
import "./modules/AEvents/playerPlaceBlock.js";
import "./modules/AEvents/playerSpawn.js";
import "./modules/AEvents/pressurePlatePop.js";
import "./modules/AEvents/pressurePlatePush.js";
import "./modules/AEvents/projectileHitBlock.js";
import "./modules/AEvents/projectileHitEntity.js";
import "./modules/AEvents/targetBlockHit.js";
import "./modules/AEvents/tripWireTrip.js";
import "./modules/AEvents/weatherChange.js";
import "./modules/AEvents/worldInitialize.js";
import "./modules/BEvents/chatSend.js";
import "./modules/BEvents/effectAdd.js";
import "./modules/BEvents/entityRemove.js";
import "./modules/BEvents/explosion.js";
import "./modules/BEvents/itemUse.js";
import "./modules/BEvents/itemUseOn.js";
import "./modules/BEvents/playerBreakBlock.js";
import "./modules/BEvents/playerGameModeChange.js";
import "./modules/BEvents/playerInteractWithBlock.js";
import "./modules/BEvents/playerInteractWithEntity.js";
import "./modules/BEvents/playerLeave.js";
import "./modules/BEvents/playerPlaceBlock.js";
import "./modules/BEvents/weatherChange.js";
import "./modules/scoreboard/xp.js";

// Commands

import "./customCommands/commands/push.js";

// Handlers

import "./init.js";
import "./register.js";
import "./commands.js";












// import { world, system } from "@minecraft/server";

// const overworld = world.getDimension("overworld");
// const germanyJson = [
//     { x: 0, y: 0, z: -2 },
//     { x: 1, y: 0, z: -2 },
//     { x: -2, y: 0, z: -2 },
//     { x: 0, y: 0, z: 2 },
//     { x: 2, y: 0, z: 0 },
//     { x: -2, y: 0, z: 0 },
//     { x: -1, y: 0, z: 0 },
//     { x: 2, y: 0, z: 2 },
//     { x: -2, y: 0, z: -1 },
//     { x: -1, y: 0, z: 2 },
//     { x: -2, y: 0, z: 2 },
//     { x: 0, y: 0, z: 1 },
//     { x: 2, y: 0, z: -2 },
//     { x: 0, y: 0, z: -1 },
//     { x: 2, y: 0, z: 1 },
//     { x: 1, y: 0, z: 0 },
//     { x: 0, y: 0, z: 0 },
// ];

// const pos = [
//     { x: 0, y: 0, z: 4 },
//     { x: 1, y: 0, z: 4 },
//     { x: 0, y: 0, z: 3 },
//     { x: 1, y: 0, z: 3 },
//     { x: 2, y: 0, z: 3 },
//     { x: -1, y: 0, z: 4 },
//     { x: -1, y: 0, z: 3 },
//     { x: 1, y: 0, z: 5 },
//     { x: 0, y: 0, z: 5 },
//     { x: 0, y: 0, z: 6 },
//     { x: -1, y: 0, z: 5 },
//     { x: -1, y: 0, z: 6 },
//     { x: -2, y: 0, z: 5 },
//     { x: -2, y: 0, z: 4 },
//     { x: 1, y: 1, z: 3 },
//     { x: 1, y: 2, z: 3 },
//     { x: 1, y: 3, z: 3 },
//     { x: 1, y: 1, z: 4 },
//     { x: 1, y: 2, z: 4 },
//     { x: 0, y: 1, z: 5 },
//     { x: 0, y: 2, z: 5 },
//     { x: 0, y: 1, z: 4 },
//     { x: 0, y: 2, z: 4 },
//     { x: 0, y: 3, z: 4 },
//     { x: -1, y: 1, z: 4 },
//     { x: -1, y: 2, z: 4 },
//     { x: -1, y: 3, z: 4 },
//     { x: -1, y: 1, z: 3 },
//     { x: -1, y: 2, z: 3 },
//     { x: -2, y: 1, z: 4 },
//     { x: -2, y: 2, z: 4 },
//     { x: -2, y: 3, z: 4 },
//     { x: -2, y: 1, z: 3 },
//     { x: -1, y: 1, z: 6 },
//     { x: -2, y: 1, z: 6 },
//     { x: -1, y: 0, z: 2 },
//     { x: 0, y: 1, z: 3 },
//     { x: 0, y: 1, z: 2 },
//     { x: -2, y: 0, z: 3 },
//     { x: -2, y: 2, z: 3 },
//     { x: 0, y: 0, z: -3 },
//     { x: -1, y: 0, z: -3 },
//     { x: 0, y: 0, z: -4 },
//     { x: 1, y: 0, z: -3 },
//     { x: -1, y: 0, z: -2 },
//     { x: 0, y: 0, z: -2 },
//     { x: 1, y: 0, z: -2 },
//     { x: 1, y: 1, z: -2 },
//     { x: 0, y: 1, z: -3 },
//     { x: 0, y: 1, z: -2 },
//     { x: 1, y: 0, z: -1 },
//     { x: 0, y: 0, z: -1 },
//     { x: 0, y: 1, z: -1 },
//     { x: -1, y: 1, z: -1 },
//     { x: -1, y: 1, z: -2 },
//     { x: -1, y: 1, z: -3 },
//     { x: -1, y: 2, z: -3 },
//     { x: -1, y: 0, z: -1 },
//     { x: 2, y: 0, z: -1 },
//     { x: 2, y: 1, z: -1 },
//     { x: 2, y: 1, z: -2 },
//     { x: 2, y: 2, z: -2 },
//     { x: 2, y: 1, z: -3 },
//     { x: -1, y: 2, z: -2 },
//     { x: 1, y: 1, z: -1 },
//     { x: 1, y: 2, z: -1 },
//     { x: 1, y: 2, z: -2 },
//     { x: 1, y: 3, z: -2 },
//     { x: 1, y: 1, z: -3 },
//     { x: 0, y: 4, z: 1 },
//     { x: -1, y: 4, z: 1 },
//     { x: -1, y: 5, z: 1 },
//     { x: 0, y: 4, z: 0 },
//     { x: -1, y: 4, z: 0 },
//     { x: -1, y: 5, z: 0 },
//     { x: 1, y: 4, z: 0 },
//     { x: 1, y: 5, z: 0 },
//     { x: 2, y: 5, z: 0 },
//     { x: 0, y: 2, z: -3 },
//     { x: 0, y: 2, z: -2 },
//     { x: 0, y: 2, z: -1 },
//     { x: 0, y: 3, z: -1 },
//     { x: 1, y: 4, z: 1 },
//     { x: 1, y: 5, z: 1 },
//     { x: 1, y: 5, z: 2 },
//     { x: 1, y: 4, z: 3 },
//     { x: 0, y: 2, z: 2 },
//     { x: 0, y: 3, z: 2 },
//     { x: 0, y: 4, z: 2 },
//     { x: 0, y: 5, z: 2 },
//     { x: -1, y: 2, z: -1 },
//     { x: -1, y: 3, z: -1 },
//     { x: 1, y: 3, z: -1 },
//     { x: 1, y: 4, z: -1 },
//     { x: 2, y: 3, z: -1 },
//     { x: 2, y: 4, z: -1 },
//     { x: -1, y: 4, z: 2 },
//     { x: 0, y: 4, z: -1 },
//     { x: -1, y: 4, z: -1 },
//     { x: -1, y: 4, z: -2 },
//     { x: 1, y: 6, z: 0 },
//     { x: 1, y: 7, z: 0 },
//     { x: 0, y: 5, z: 0 },
//     { x: 0, y: 6, z: 0 },
//     { x: 0, y: 7, z: 0 },
//     { x: 0, y: 8, z: 0 },
//     { x: 0, y: 9, z: 0 },
//     { x: 0, y: 5, z: -1 },
//     { x: 0, y: 6, z: -1 },
//     { x: 1, y: 8, z: 0 },
//     { x: 1, y: 9, z: 0 },
//     { x: 1, y: 10, z: 0 },
//     { x: 1, y: 11, z: 0 },
//     { x: 1, y: 12, z: 0 },
//     { x: 1, y: 5, z: -1 },
//     { x: 1, y: 6, z: -1 },
//     { x: 1, y: 7, z: -1 },
//     { x: 1, y: 8, z: -1 },
//     { x: 1, y: 9, z: -1 },
//     { x: 1, y: 10, z: -1 },
//     { x: 0, y: 7, z: -1 },
//     { x: 0, y: 8, z: -1 },
//     { x: -1, y: 5, z: -1 },
//     { x: -1, y: 6, z: -1 },
//     { x: -1, y: 7, z: -1 },
//     { x: -1, y: 8, z: -1 },
//     { x: -1, y: 9, z: -1 },
//     { x: -1, y: 10, z: -1 },
//     { x: -1, y: 11, z: -1 },
//     { x: -1, y: 12, z: -1 },
//     { x: -1, y: 10, z: 0 },
//     { x: -1, y: 11, z: 0 },
//     { x: -1, y: 12, z: 0 },
//     { x: -1, y: 13, z: 0 },
//     { x: -1, y: 14, z: 0 },
//     { x: 0, y: 14, z: 0 },
//     { x: 0, y: 15, z: 0 },
//     { x: 0, y: 16, z: 0 },
//     { x: 0, y: 17, z: 0 },
//     { x: 0, y: 6, z: 2 },
//     { x: 0, y: 7, z: 2 },
//     { x: 0, y: 8, z: 2 },
//     { x: 0, y: 9, z: 2 },
//     { x: 0, y: 10, z: 2 },
//     { x: 0, y: 11, z: 2 },
//     { x: 0, y: 12, z: 2 },
//     { x: 0, y: 13, z: 2 },
//     { x: 0, y: 14, z: 2 },
//     { x: 0, y: 15, z: 2 },
//     { x: 0, y: 16, z: 2 },
//     { x: -1, y: 6, z: 1 },
//     { x: -1, y: 7, z: 1 },
//     { x: 0, y: 6, z: 1 },
//     { x: 0, y: 7, z: 1 },
//     { x: 0, y: 8, z: 1 },
//     { x: 0, y: 9, z: 1 },
//     { x: 0, y: 10, z: 1 },
//     { x: 0, y: 11, z: 1 },
//     { x: 0, y: 12, z: 1 },
//     { x: 0, y: 13, z: 1 },
//     { x: 0, y: 14, z: 1 },
//     { x: 0, y: 15, z: 1 },
//     { x: 1, y: 6, z: 1 },
//     { x: 1, y: 7, z: 1 },
//     { x: 1, y: 8, z: 1 },
//     { x: 1, y: 9, z: 1 },
//     { x: 1, y: 10, z: 1 },
//     { x: 1, y: 11, z: 1 },
//     { x: 1, y: 12, z: 1 },
//     { x: 1, y: 6, z: 2 },
//     { x: 1, y: 7, z: 2 },
//     { x: 1, y: 9, z: 2 },
//     { x: 1, y: 10, z: 2 },
//     { x: 1, y: 11, z: 2 },
//     { x: 1, y: 12, z: 2 },
//     { x: 1, y: 13, z: 2 },
//     { x: 1, y: 14, z: 2 },
//     { x: 1, y: 15, z: 2 },
//     { x: 1, y: 16, z: 2 },
//     { x: 1, y: 17, z: 2 },
//     { x: 1, y: 18, z: 2 },
//     { x: 1, y: 19, z: 2 },
//     { x: 2, y: 19, z: 2 },
//     { x: 2, y: 20, z: 2 },
//     { x: 2, y: 21, z: 2 },
//     { x: 2, y: 22, z: 2 },
//     { x: 2, y: 23, z: 2 },
//     { x: 2, y: 24, z: 2 },
//     { x: 2, y: 25, z: 2 },
//     { x: 2, y: 26, z: 2 },
//     { x: 3, y: 25, z: 2 },
//     { x: 3, y: 26, z: 2 },
//     { x: 3, y: 27, z: 2 },
//     { x: 3, y: 28, z: 2 },
//     { x: 3, y: 29, z: 2 },
//     { x: 3, y: 30, z: 2 },
//     { x: 3, y: 31, z: 2 },
//     { x: 2, y: 9, z: 1 },
//     { x: 2, y: 10, z: 1 },
//     { x: 2, y: 11, z: 1 },
//     { x: 2, y: 12, z: 1 },
//     { x: 2, y: 13, z: 1 },
//     { x: 2, y: 14, z: 1 },
//     { x: 2, y: 15, z: 1 },
//     { x: 2, y: 16, z: 1 },
//     { x: 2, y: 17, z: 1 },
//     { x: 2, y: 18, z: 1 },
//     { x: 2, y: 19, z: 1 },
//     { x: 2, y: 20, z: 1 },
//     { x: 2, y: 21, z: 1 },
//     { x: -1, y: 4, z: 3 },
//     { x: 0, y: 3, z: -2 },
//     { x: 1, y: 13, z: 0 },
//     { x: 1, y: 14, z: 0 },
//     { x: 1, y: 15, z: 0 },
//     { x: 1, y: 16, z: 0 },
//     { x: 1, y: 17, z: 0 },
//     { x: 1, y: 18, z: 0 },
//     { x: 1, y: 19, z: 0 },
//     { x: 1, y: 20, z: 0 },
//     { x: 1, y: 21, z: 0 },
//     { x: 1, y: 13, z: 1 },
//     { x: 1, y: 14, z: 1 },
//     { x: 1, y: 15, z: 1 },
//     { x: 1, y: 16, z: 1 },
//     { x: 0, y: 16, z: 1 },
//     { x: 0, y: 17, z: 2 },
//     { x: 0, y: 18, z: 2 },
//     { x: 0, y: 19, z: 2 },
//     { x: 0, y: 20, z: 2 },
//     { x: 0, y: 21, z: 2 },
//     { x: 0, y: 22, z: 2 },
//     { x: 2, y: 22, z: 1 },
//     { x: 2, y: 23, z: 1 },
//     { x: 2, y: 24, z: 1 },
//     { x: 1, y: 17, z: 1 },
//     { x: 1, y: 18, z: 1 },
//     { x: 1, y: 19, z: 1 },
//     { x: 1, y: 20, z: 2 },
//     { x: 0, y: 23, z: 2 },
//     { x: 0, y: 24, z: 2 },
//     { x: 0, y: 4, z: 4 },
//     { x: 0, y: 5, z: 4 },
//     { x: 0, y: 3, z: 5 },
//     { x: 0, y: 4, z: 5 },
//     { x: 0, y: 5, z: 5 },
//     { x: 1, y: 1, z: 5 },
//     { x: 1, y: 2, z: 5 },
//     { x: 1, y: 3, z: 5 },
//     { x: 1, y: 21, z: 2 },
//     { x: 1, y: 22, z: 2 },
//     { x: 1, y: 20, z: 1 },
//     { x: 1, y: 21, z: 1 },
//     { x: 1, y: 22, z: 0 },
//     { x: 0, y: 18, z: 0 },
//     { x: 0, y: 9, z: -1 },
//     { x: 0, y: 10, z: -1 },
//     { x: 0, y: 11, z: -1 },
//     { x: 0, y: 12, z: -1 },
//     { x: 0, y: 13, z: -1 },
//     { x: 0, y: 19, z: 0 },
//     { x: 0, y: 20, z: 0 },
//     { x: 0, y: 17, z: 1 },
//     { x: 1, y: 22, z: 1 },
//     { x: 1, y: 23, z: 2 },
//     { x: 1, y: 24, z: 2 },
//     { x: 2, y: 27, z: 2 },
//     { x: 2, y: 28, z: 2 },
//     { x: 2, y: 25, z: 1 },
//     { x: 2, y: 26, z: 1 },
//     { x: 2, y: 6, z: 0 },
//     { x: 1, y: 23, z: 0 },
//     { x: 1, y: 11, z: -1 },
//     { x: 0, y: 14, z: -1 },
//     { x: -1, y: 13, z: -1 },
//     { x: -1, y: 15, z: 0 },
//     { x: -1, y: 16, z: 0 },
//     { x: -2, y: 3, z: 3 },
//     { x: -2, y: 4, z: 3 },
//     { x: -2, y: 5, z: 3 },
//     { x: 0, y: 25, z: 2 },
//     { x: 0, y: 26, z: 2 },
//     { x: 0, y: 27, z: 2 },
//     { x: 1, y: 25, z: 2 },
//     { x: 1, y: 24, z: 1 },
//     { x: 1, y: 24, z: 0 },
//     { x: 1, y: 25, z: 0 },
//     { x: 0, y: 21, z: 0 },
//     { x: 0, y: 22, z: 0 },
//     { x: 0, y: 23, z: 0 },
//     { x: 0, y: 18, z: 1 },
//     { x: 0, y: 19, z: 1 },
//     { x: 0, y: 28, z: 2 },
//     { x: 0, y: 29, z: 2 },
//     { x: 1, y: 26, z: 2 },
//     { x: 1, y: 27, z: 2 },
//     { x: 1, y: 28, z: 2 },
//     { x: 2, y: 29, z: 2 },
//     { x: 2, y: 30, z: 2 },
//     { x: 2, y: 31, z: 2 },
//     { x: 2, y: 27, z: 1 },
//     { x: 2, y: 28, z: 1 },
//     { x: 2, y: 29, z: 1 },
//     { x: 2, y: 5, z: -1 },
//     { x: 0, y: 15, z: -1 },
//     { x: 0, y: 16, z: -1 },
//     { x: -1, y: 14, z: -1 },
//     { x: -1, y: 17, z: 0 },
//     { x: -2, y: 6, z: 3 },
//     { x: -2, y: 7, z: 3 },
//     { x: -2, y: 8, z: 3 },
//     { x: -1, y: 5, z: 3 },
//     { x: 0, y: 30, z: 2 },
//     { x: 0, y: 31, z: 2 },
//     { x: 1, y: 29, z: 2 },
//     { x: 2, y: 30, z: 1 },
//     { x: 2, y: 31, z: 1 },
//     { x: 2, y: 32, z: 1 },
//     { x: 2, y: 33, z: 1 },
//     { x: 2, y: 34, z: 1 },
//     { x: 1, y: 25, z: 1 },
//     { x: 1, y: 26, z: 1 },
//     { x: 0, y: 20, z: 1 },
//     { x: 0, y: 21, z: 1 },
//     { x: 0, y: 22, z: 1 },
//     { x: -1, y: 5, z: 2 },
//     { x: -1, y: 6, z: 2 },
//     { x: -1, y: 7, z: 2 },
//     { x: -1, y: 6, z: 3 },
//     { x: 0, y: 32, z: 2 },
//     { x: 0, y: 33, z: 2 },
//     { x: 0, y: 34, z: 2 },
//     { x: 0, y: 35, z: 2 },
//     { x: 1, y: 30, z: 2 },
//     { x: 1, y: 31, z: 2 },
//     { x: 1, y: 32, z: 2 },
//     { x: 1, y: 29, z: 1 },
//     { x: 1, y: 30, z: 1 },
//     { x: 1, y: 31, z: 1 },
//     { x: 1, y: 26, z: 0 },
//     { x: 1, y: 27, z: 0 },
//     { x: 0, y: 24, z: 0 },
//     { x: -1, y: 18, z: 0 },
//     { x: -1, y: 19, z: 0 },
//     { x: -1, y: 7, z: 3 },
//     { x: 1, y: 33, z: 2 },
//     { x: 2, y: 35, z: 1 },
//     { x: 2, y: 36, z: 1 },
//     { x: 2, y: 37, z: 1 },
//     { x: 2, y: 38, z: 1 },
//     { x: 1, y: 28, z: 0 },
//     { x: 1, y: 12, z: -1 },
//     { x: 0, y: 25, z: 0 },
//     { x: 0, y: 26, z: 0 },
//     { x: 0, y: 27, z: 0 },
//     { x: -1, y: 8, z: 1 },
//     { x: -1, y: 8, z: 2 },
//     { x: -1, y: 9, z: 2 },
//     { x: 0, y: 36, z: 2 },
//     { x: 0, y: 37, z: 2 },
//     { x: 0, y: 38, z: 2 },
//     { x: 0, y: 39, z: 2 },
//     { x: 0, y: 40, z: 2 },
//     { x: 0, y: 41, z: 2 },
//     { x: 0, y: 42, z: 2 },
//     { x: 1, y: 34, z: 2 },
//     { x: 1, y: 35, z: 2 },
//     { x: 1, y: 36, z: 2 },
//     { x: 1, y: 32, z: 1 },
//     { x: 1, y: 33, z: 1 },
//     { x: 1, y: 34, z: 1 },
//     { x: 0, y: 23, z: 1 },
//     { x: 0, y: 24, z: 1 },
//     { x: -1, y: 10, z: 2 },
//     { x: -1, y: 11, z: 2 },
//     { x: -1, y: 12, z: 2 },
//     { x: -1, y: 8, z: 3 },
//     { x: 0, y: 41, z: 1 },
//     { x: 0, y: 43, z: 2 },
//     { x: 0, y: 44, z: 2 },
//     { x: 0, y: 45, z: 2 },
//     { x: 1, y: 37, z: 2 },
//     { x: 1, y: 38, z: 2 },
//     { x: 1, y: 39, z: 2 },
//     { x: 2, y: 39, z: 1 },
//     { x: 1, y: 35, z: 1 },
//     { x: 1, y: 36, z: 1 },
//     { x: 0, y: 25, z: 1 },
//     { x: 0, y: 42, z: 1 },
//     { x: 0, y: 43, z: 1 },
//     { x: 0, y: 44, z: 1 },
//     { x: 0, y: 45, z: 1 },
//     { x: 0, y: 46, z: 1 },
//     { x: 0, y: 46, z: 2 },
//     { x: 0, y: 47, z: 2 },
//     { x: 0, y: 48, z: 2 },
//     { x: 0, y: 49, z: 2 },
//     { x: 3, y: 32, z: 2 },
//     { x: 3, y: 33, z: 2 },
//     { x: 1, y: 13, z: -1 },
//     { x: 0, y: 28, z: 0 },
//     { x: 0, y: 50, z: 2 },
//     { x: 0, y: 51, z: 2 },
//     { x: 0, y: 47, z: 1 },
//     { x: 0, y: 48, z: 1 },
//     { x: 0, y: 49, z: 1 },
//     { x: 0, y: 50, z: 1 },
//     { x: 0, y: 51, z: 1 },
//     { x: 0, y: 52, z: 1 },
//     { x: 0, y: 53, z: 1 },
//     { x: 0, y: 54, z: 1 },
//     { x: 0, y: 55, z: 1 },
//     { x: 0, y: 56, z: 1 },
//     { x: 0, y: 57, z: 1 },
//     { x: 3, y: 34, z: 2 },
//     { x: 2, y: 32, z: 2 },
//     { x: 0, y: 29, z: 0 },
//     { x: 0, y: 37, z: 1 },
//     { x: 0, y: 38, z: 1 },
//     { x: 0, y: 39, z: 1 },
//     { x: 1, y: 37, z: 1 },
//     { x: 1, y: 38, z: 1 },
//     { x: 2, y: 40, z: 1 },
//     { x: 2, y: 41, z: 1 },
//     { x: 2, y: 42, z: 1 },
//     { x: 2, y: 43, z: 1 },
//     { x: 2, y: 44, z: 1 },
//     { x: 2, y: 45, z: 1 },
//     { x: 2, y: 46, z: 1 },
//     { x: 2, y: 47, z: 1 },
//     { x: 2, y: 48, z: 1 },
//     { x: 1, y: 29, z: 0 },
//     { x: 1, y: 30, z: 0 },
//     { x: 1, y: 31, z: 0 },
//     { x: 1, y: 32, z: 0 },
//     { x: 1, y: 33, z: 0 },
//     { x: 1, y: 34, z: 0 },
//     { x: 1, y: 35, z: 0 },
//     { x: 1, y: 36, z: 0 },
//     { x: 1, y: 37, z: 0 },
//     { x: 1, y: 38, z: 0 },
//     { x: 1, y: 39, z: 0 },
//     { x: 1, y: 40, z: 0 },
//     { x: 1, y: 41, z: 0 },
//     { x: 1, y: 42, z: 0 },
//     { x: 0, y: 42, z: 0 },
//     { x: 0, y: 43, z: 0 },
//     { x: 1, y: 45, z: 1 },
//     { x: 1, y: 46, z: 1 },
//     { x: 1, y: 47, z: 1 },
//     { x: 1, y: 48, z: 1 },
//     { x: 1, y: 49, z: 1 },
//     { x: 1, y: 50, z: 1 },
//     { x: 1, y: 51, z: 1 },
//     { x: 1, y: 52, z: 1 },
//     { x: 1, y: 43, z: 0 },
//     { x: 1, y: 44, z: 0 },
//     { x: 1, y: 45, z: 0 },
//     { x: 1, y: 46, z: 0 },
//     { x: 1, y: 47, z: 0 },
//     { x: 1, y: 48, z: 0 },
//     { x: 1, y: 49, z: 0 },
//     { x: 1, y: 50, z: 0 },
//     { x: 2, y: 49, z: 1 },
//     { x: 2, y: 50, z: 1 },
//     { x: 2, y: 51, z: 1 },
//     { x: 2, y: 52, z: 1 },
//     { x: 2, y: 53, z: 1 },
//     { x: 1, y: 53, z: 1 },
//     { x: 1, y: 54, z: 1 },
//     { x: 1, y: 55, z: 1 },
//     { x: 0, y: 52, z: 2 },
//     { x: 0, y: 53, z: 2 },
//     { x: 0, y: 54, z: 2 },
//     { x: 2, y: 8, z: 1 },
//     { x: 2, y: 7, z: 1 },
//     { x: 2, y: 7, z: 0 },
//     { x: 2, y: 7, z: -1 },
//     { x: 1, y: 2, z: -3 },
//     { x: 0, y: 3, z: -3 },
//     { x: 1, y: 7, z: 3 },
//     { x: 2, y: 7, z: 3 },
//     { x: 2, y: 7, z: 4 },
// ];

// function spawnMBECreation(positions, location) {
//     for (let i = 0; i < positions.length; i++) {
//         let offsetLocation = {
//             x: location.x + positions[i].x,
//             y: location.y + positions[i].y,
//             z: location.z + positions[i].z,
//         };
//         world.structureManager.place("mbe:mbe", overworld, offsetLocation);
//         system.runTimeout(() => {
//             overworld.getEntities({ name: "Grumm", location: offsetLocation, closest: 1 })[0].teleport(offsetLocation);
//         }, 10);
//     }
// }

// spawnMBECreation(pos, { x: 0, y: -50, z: 0 });

// let range = 100;

// let distance = 20;

// for (let x = -range; x <= range; x += distance) {
//     for (let z = -range; z <= range; z += distance) {
//         spawnMBECreation(positions, {x: x, y: 0, z: z});
//     }
// }
