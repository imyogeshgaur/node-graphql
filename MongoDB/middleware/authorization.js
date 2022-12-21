import dcryptUser from "../helper/helpers.js";

const context = ({ req }) => {
    const { authorisation } = req.headers;
    if (!authorisation) {
        throw new Error("Not Authorized !!!")
    } else {
        const userId = dcryptUser(authorisation);
        return { userId }
    }
}

export default context;