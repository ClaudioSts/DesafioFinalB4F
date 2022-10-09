import styles from '../styles/Home.module.css'
export default function LoginCompany() {
    return (

        <div className="loginCom">
            <form>
                <h1> Company</h1>
                <div className="userId">
                    Company:
                    <br />
                    <input id="username" name="username" placeholder="" />
                    <br />
                </div>
                <div className="pswdUser">
                    Password:
                    <br />
                    <input type="password" id="password" name="password" placeholder="" />
                    <br />
                </div>
                <div className="button1">
                    <button type="submit">Login</button>
                </div>
                <span>
                    <a href="#">I forgot my password?</a>
                    <br />
                    <a href="">Create account</a>
                </span>
            </form>
        </div>
    );
}