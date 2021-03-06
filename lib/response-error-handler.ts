import 错误码表 from "./errno.js";
import assert from "assert";
export function response_error_handler(data: any, urlhref: string) {
    assert(typeof data === "object" && data && !Array.isArray(data));

    const errno = data?.errno;
    assert(typeof errno === "number");

    if (errno !== 0) {
        console.error("response body error", data);
        throw Error(
            "response data error \n" +
                urlhref +
                " \n" +
                errno +
                " " +
                Reflect.get(错误码表, errno)
        );
    }
}
