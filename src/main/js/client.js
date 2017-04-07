let traverson = require('traverson');
let JsonHalAdapter = require('traverson-hal');

traverson.registerMediaType(JsonHalAdapter.mediaType, JsonHalAdapter);

export let api = traverson.from('/api')
    .jsonHal();
