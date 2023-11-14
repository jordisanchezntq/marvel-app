import { IonButton, IonContent, IonInput, IonPage, IonRow, IonText } from '@ionic/react'
import Header from '../../packages/components/Header/Header'
import style from './Login.module.scss'
import Button from '../../components/Button/Button'

const handleLogin = () => {
    console.log('Login')
}

const Login = () => {
    return (
        <IonPage>
            <IonContent>
                <Header />

                <IonText>
                    <h1 className={`${style.loginTitle} ion-text-center`}>Login</h1>
                </IonText>

                <IonRow>
                    <IonInput
                        className='ion-margin-top'
                        type='email'
                        label='Email'
                        labelPlacement="floating"
                        fill="outline"
                    />
                    <IonInput
                        className='ion-margin-top'
                        type='password'
                        label='Password'
                        labelPlacement="floating"
                        fill="outline"
                    />
                </IonRow>
                <IonRow className="ion-padding-top">
                    <Button
                        variant="primary"
                        color="red"
                        isBlock
                        onClick={handleLogin}
                    >
                        Log in
                    </Button>
                </IonRow>
            </IonContent>
        </IonPage >
    )
}

export default Login