import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import style from "./Home.scss"
import Header from '../../components/Header/Header';

const Home: React.FC = () => {

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage>

      <IonContent fullscreen>
        <Header />
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              ¿ Que Avenger quieres ver hoy ?
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
