import React from "react";
import { Zap } from 'lucide-react';

import styles from './style.module.css';

function Footer(){
    return(
        <div className={styles.containerFooter}>
            <p>Todos os direitos reservados</p>
            <Zap />
        </div>
    );
}

export default Footer;