import { TextureLoader } from 'three';

import {
    dirtImg,
    grassImg,
    glassImg,
    logImg,
    woodImg,
} from './images';

const dirtTexture = new TextureLoader(dirtImg);
const grassTexture = new TextureLoader(grassImg);
const logTexture = new TextureLoader(logImg);
const woodTexture = new TextureLoader(woodImg);
const glassTexture = new TextureLoader(glassImg);

export { dirtTexture, grassTexture, logTexture, woodTexture, glassTexture };