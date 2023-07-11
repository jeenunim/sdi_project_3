import React, { useContext } from 'react';
import { ParentContext } from '../App/App';
import styles from './WeaponDetails.css';

const WeaponPage = () => {
    const { weaponData } = useContext(ParentContext);

    let link = window.location.href;
    let linkArr = link.split('/');
    let linkID = linkArr.pop() || linkArr.pop();
    let weapon = weaponData.find((e) => e.id == linkID);
    console.log(weapon);

    return (
    <div className={styles.weaponContainer}>
        <h1 className={styles.weaponHeader}>WEAPON DETAILS</h1>
        <div className={styles.weaponImageContainer}>
        <img
            className={styles.weaponImage}
            id={`${weapon.name}`}
            src={weapon.img}
            alt={`${weapon.name}`}
        />
        </div>
        <div className={styles.weaponText}>
        {`${weapon.name}:${'\n'}${weapon.details}\n`}
        </div>
    </div>
    );
    }

export default WeaponPage;
