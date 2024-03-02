import axios from "axios";


class PostServices {
    static async sendData(url, values, navigate) {
        try {
            const response = await axios.post(url, values);
            navigate("/account", {
                state: [
                    response.data.user,
                    { token: response.data.access_token },
                ],
            });
        } catch (error) {
            console.log(error.message);
            navigate("/error", error.message&&{ state: { error: error.message } });
        }
    }
    static async logout(url, token, navigate) {
      
        try {
            const response = await axios({
                method: 'post',
                url: url, 
                headers:{
                    Authorization: 'Bearer '+ token
            }}
                 );
            navigate("/auth");
        } catch (error) {
            console.log(error.message);
            navigate("/error", error.message&&{ state: { error: error.message } });
        }
    }
}

export default PostServices;
