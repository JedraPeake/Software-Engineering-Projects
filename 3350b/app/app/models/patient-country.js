import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    patientProfile: DS.hasMany('patient-profile'),
    province: DS.hasMany('province'),

    
});

