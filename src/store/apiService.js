import { ref } from "vue";
import axios, { all } from "axios";
const baseUrl = "https://lesinnovateurs.me/api/";

//admin/users
export const useUsers = () => {
    const users = ref([]);
    const error = ref(null);
    const resquestOptions = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    };

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}admin/users`, resquestOptions);
            users.value = response.data.users;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { users, error, load };
};

//admin/electeurs

export const useElecteurs = () => {
    const electeurs = ref([]);
    const error = ref(null);
    const resquestOptions = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    };

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}admin/electeurs`, resquestOptions);
            electeurs.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { electeurs, error, load };
}




export const useCandidats = () => {
    const candidats = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}public/candidats`);
            candidats.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { candidats, error, load };
}


export const useSondages = () => {
    const sondages = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}public/sondages`);
            sondages.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { sondages, error, load };
}



export const usePosts = () => {

    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}public/posts`);
            posts.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { posts, error, load };
}




export const useElections = () => {

    const elections = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}public/elections`);
            elections.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { elections, error, load };
}


export const useMostReactedProgrammes = () => {

    const mostReactedProgrammes = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}user/most-reacted-programmes`);
            mostReactedProgrammes.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { mostReactedProgrammes, error, load };
}


export const useMostLikedPosts = () => {

    const mostLikedPosts = ref([]);
    const error = ref(null);
    const resquestOptions = {
        headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
    };

    const load = async () => {
        try {
        const response = await axios.get(`${baseUrl}user/most-liked-candidats`, resquestOptions);
            mostLikedPosts.value = response.data.data;
        } catch (err) {
        error.value = err.message;
        }
    };
    return { mostLikedPosts, error, load };
}