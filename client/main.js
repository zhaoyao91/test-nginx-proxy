import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
    Meteor.call('getNumber', (err, number)=> {
        if (err)console.error(err);
        else $('#number').append(number);
    })
});