import currentlimiter from "@masx200/async-task-current-limiter";
import https from "https";
import fetch from "node-fetch";
const fetchlimiter = currentlimiter(15);
const agent = new https.Agent({
    keepAlive: true,
});
https.globalAgent = agent;
const limitedfetch = fetchlimiter.asyncwrap(function (
    url: string,
    opt?: RequestInit
): Promise<Response> {
    // @ts-ignore
    opt = Object.assign(
        { agent: url.startsWith("https:") ? agent : undefined },
        opt
    );
    // const req = new fetch.Request(url, opt);
    //@ts-ignore
    return fetch(url, opt) as Response;
});
export { limitedfetch as fetch };
