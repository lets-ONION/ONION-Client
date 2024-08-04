export interface Onion {
    name: string;
    level: number;
    image_url: string;
}

export interface DataResponse {
    pos_onion: Onion;
    neg_onion: Onion;
    is_spoken: boolean;
}

export interface FetchMainResponse {
    msg: string;
    code: number;
    data: DataResponse;
}

export interface WaterResult {
    name: string;
    level: number;
    image_url: string;
    is_evolvable: boolean;
}
