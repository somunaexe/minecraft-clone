import { TextureLoader } from 'three';
import {dirtImg, grassImg, glassImg, logImg, woodImg } from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);
const glassTexture = new TextureLoader().load(glassImg);

export { dirtTexture, grassTexture, logTexture, woodTexture, glassTexture };