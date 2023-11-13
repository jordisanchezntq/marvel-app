import { IonHeader, IonImg, IonTitle, IonToolbar } from '@ionic/react'
import style from "./Header.module.scss"

const Header = () => {
  return (
    <IonHeader>
        <IonToolbar>
            <div className={`${style.headerBody} ion-padding`}>
                <IonTitle className={style.headerTitle}>Marvel</IonTitle>
                <IonImg
                src='/src/assets/shield-icon.png'
                alt='shield icon'
                />
            </div>
        </IonToolbar>
    </IonHeader>
  )
}

export default Header