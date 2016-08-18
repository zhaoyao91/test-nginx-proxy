import { Meteor } from 'meteor/meteor';
import {Random} from 'meteor/random';

const number = Random.id();

Meteor.methods({
    getNumber() {
        return number;
    }
});