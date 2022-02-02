import { IconsList } from "../socialMediaList"
import { SOCIALMEDIALIST } from "./constants"
import { messages } from "./messages"
import { styles } from "./styles"

export const SocialMedias = ()=>{
    return(
        <div className={styles.social_media_content}>
            <h4>{messages.socialMediaTitle}</h4>
            <ul className={styles.social_media_list}>
                <IconsList items={SOCIALMEDIALIST} classes={"social__media__circle mx-3"} />
            </ul>
        </div>
    )
}