const API = "https://api.themoviedb.org/3"

export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODViMmUyYWRiOGY4OTRmODQ3MmM1MDYyYTM5ZTA4OSIsInN1YiI6IjYyNjVlM2U3MWQ4MjBmMDA2NWZmYjNjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BkAHhh2-WfPGlVWgkVfHXZoxOvRTgr5yZICW3LOckqw",
            "Content-Type": "application/json;charset=uft-8",
        },
    })
        .then((result) => result.json())
}