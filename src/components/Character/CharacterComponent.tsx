import { IonCard, IonCardContent, IonCardHeader, IonImg, IonItem, IonSelectOption, IonText } from "@ionic/react"

interface CharacterProp {
    character: {
        id: number,
        name: string,
        thumbnail: {
            path: string,
            extension: string
        },
        description: string
    }
}

const CharacterComponent: React.FC<CharacterProp> = ({ character }) => {
    return (
        <IonCard className="ion-margin-top">
            <IonCardHeader>
                <IonImg
                    src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail
                            .extension
                    }
                />
            </IonCardHeader>
            <IonCardContent >
                <IonText>
                    {character.description}
                </IonText>

            </IonCardContent>
        </IonCard>
    )
}

export default CharacterComponent