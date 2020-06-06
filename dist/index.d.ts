
export declare function deletefiles(rawfiles: Array<string>): Promise<void>;

export declare function listonedir(dir: string): Promise<Array<PANFILE | PANDIR>>;

export declare type PANDIR = {
    dir_empty: number;
    empty: number;
    category: number;
    fs_id: number;
    isdir: 1;
    local_ctime: number;
    local_mtime: number;
    oper_id: number;
    path: string;
    server_ctime: number;
    server_filename: string;
    server_mtime: number;
    share: number;
    size: number;
    unlist: number;
};

export declare type PANFILE = {
    category: number;
    fs_id: number;
    isdir: 0;
    local_ctime: number;
    local_mtime: number;
    md5: string;
    oper_id: number;
    path: string;
    server_ctime: number;
    server_filename: string;
    server_mtime: number;
    share: number;
    size: number;
    unlist: number;
};

export { }