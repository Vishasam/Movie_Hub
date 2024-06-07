import { ENDPOINT } from "./endpoint";
import { AXIOS_CLIENT } from "./fetcher";

export async function getmovies() {
    const { data } = await AXIOS_CLIENT.get(ENDPOINT.GET_MOVIES)
    return data.data
}