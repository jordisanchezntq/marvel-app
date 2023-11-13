import { IonSelectOption, IonText } from "@ionic/react"

interface CharacterProp {
    character: {
        id: number,
        name: string
    }
}

const CharacterComponent: React.FC<CharacterProp> = ({ character }) => {
    return (
       <>
        <IonText>
            <h1>{character.name}</h1>
        </IonText>
       </>
    )
}

export default CharacterComponent