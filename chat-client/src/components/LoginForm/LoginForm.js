import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const LoginForm = ({onSubmit}) => {

    const [username, setUsername] = useState("");
    let handleUserNameChange = event => setUsername(event.target.value);

    let handleSubmit = () => {
        document.title = username;
        onSubmit(username);
    }

    return (
        <div style={{  position: 'relative',
            top: '35vh'}}>
            <TextField
                className="inputField"
                style={{width: '60%'}}
                label="请输入您的昵称"
                placeholder="昵称"
                onChange={handleUserNameChange}
                margin="normal"
                variant="outlined"
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleSubmit();
                    }
                }}
            />
            <br/>
            <Button variant="outlined" style={{width: '60%'}} onClick={handleSubmit}>
                登录
            </Button>

        </div>
    )
}

export default LoginForm
