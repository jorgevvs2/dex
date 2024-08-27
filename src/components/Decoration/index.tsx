import styles from './styles.module.scss'

export function Decoration(){
    return(
        <span className={styles.decoration}>
            <div>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
            </div>
            <div>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
                <span className={styles.decorationbutton}></span>
            </div>

            <span className={styles.footer}>
                <span className={styles.whitebar}></span>
                <span className={styles.whitebar2}></span>

                <span className={styles.yellowbutton}></span>

                <span className={styles.blackbar}></span>
                <span className={styles.blackbar2}></span>


            </span>
        </span>
    );
}