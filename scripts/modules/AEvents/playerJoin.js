import { world } from "@minecraft/server";
import { Module } from "../../module.js";
import { handleEvent } from "./utils.js";

let module = undefined;

Module.register(
    {
        name: "playerJoinA",
        type: "after",
        description: "",
        event: world.afterEvents.playerJoin,
        code: [],
        source: "world",
        methods: ["playerId", "playerName"],
        types: ["property", "property"],
    },
    (data) => {
        if (!module) module = Module.getModule("playerJoinA");
        handleEvent(data, module);
    }
);