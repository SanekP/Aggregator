import traverson from "traverson";
import JsonHalAdapter from "traverson-hal";

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

export let api = traverson.from('/api')
    .jsonHal();
