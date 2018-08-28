const buffer = require('buffer');

class authService {
    login(credentials, callback){
        let encodeAuth = new buffer.Buffer(credentials.username + ':' + credentials.password).toString('base64');

        fetch('https://api.github.com/user',{
            headers: {
                'Authorization': 'Basic ' + encodeAuth
            }
        })
        .then((response) => {
            if(response.status >= 200 && response.status < 300) {
                return response;
            }
            throw {
                badCredentials: response.status == 401,
                unknowError: response.status != 401
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            return callback({ success: true, data: result });
        })
        .catch((error) => {
            return callback({ success: false, error: error });
        });
    }
}

export default new authService();