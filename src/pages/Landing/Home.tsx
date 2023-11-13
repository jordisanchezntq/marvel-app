import {
  IonContent,
  IonHeader,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import Header from '../../packages/components/Header/Header';
import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../../configs/end-points.config'
import { ApiService } from '../../services/api.service';
import CharacterComponent from '../../components/Character/CharacterComponent';

const Home: React.FC = () => {
  const [info, setInfo] = useState<any[]>([]);
  const [characterSel, setCharacterSel] = useState('')

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  useEffect(() => {
    fetchInfo();
  }, [])

  const fetchInfo = async () => {
    try {
      const res = await ApiService.get(ENDPOINTS.generalInfo);
      setInfo(res?.data.data.results)
    } catch (error) {
      console.log(error)
    }
  }

  console.log(info)

  return (
    <IonPage>
      <IonContent fullscreen>
        <Header />
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <div className='ion-padding-horizontal'>

          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">
                ¿ Que Avenger quieres ver hoy ?
              </IonTitle>
            </IonToolbar>
          </IonHeader>

          <IonRow className="ion-padding-top ion-justify-content-center">
            <IonText>
              Select your character
            </IonText>
          </IonRow>

          <IonRow className="ion-padding-top ion-justify-content-center">
            <IonSelect
              value={characterSel}
              onIonChange={(e: any) => setCharacterSel(e.detail.value)}
            >
              {
                info && info.map(character => (
                  <IonSelectOption
                    key={character.id}
                    value={character.name}
                  >
                    {character.name}
                  </IonSelectOption>
                ))
              }
            </IonSelect>
          </IonRow>

          <IonRow>
            {info &&
              info
                .filter((character) => character.name === characterSel)
                .map((foundCharacter) => (
                  <CharacterComponent key={foundCharacter.id} character={foundCharacter} />
                ))}
          </IonRow>

        </div>

      </IonContent>
    </IonPage>
  );
};

export default Home;
