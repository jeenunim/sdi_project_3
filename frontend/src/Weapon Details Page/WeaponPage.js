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
    <div class="weaponDetails">
        <div className="weaponContainer">
            <h1 className="header">WEAPON DETAILS</h1>
            <div className="weaponImageContainer">
                <img
                    className="weaponImage"
                    id={`${weapon.name}`}
                    src={weapon.img}
                    alt={`${weapon.name}`}
                />
            </div>
            <div className="weaponText">
            {`${weapon.name}:${'\n'}${weapon.details}\n`}
            </div>
        </div>
    </div>
    );
    }

export default WeaponPage;
