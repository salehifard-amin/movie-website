import axios from "axios"

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzUzMmE4NGFiNzMyZTM0ZDMyMzlmM2NiYmNjZDc2OSIsIm5iZiI6MTcyODMxODQwOC41ODMyODMsInN1YiI6IjY2ZmMzY2RkMDJlMmUzZmE0YWE2ODM1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vezquMgcTd8HAYsSHog8sUYRfxZHL09jZF4LLgXHgMg"

export const myApi = axios.create(
    {
        baseURL:"https://api.themoviedb.org/3",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)