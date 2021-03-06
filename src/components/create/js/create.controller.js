(function() {

  'use strict';

  angular
    .module('leagueApp.components.create', [])
    .controller('createController', createController);

  createController.$inject = ['createService'];

  function createController(createService) {
    /*jshint validthis: true */
    this.champObj = initChamp();
    this.filter = 'name';
    this.spellsP = [];
    this.spellsQ = [];
    this.spellsW = [];
    this.spellsE = [];
    this.spellsR = [];

    createService.getSpells()
    .then((data) => {
      const results = data.data.data;
      window.results = results;
      for (let name in results) {
        this.spellsP.push(results[name].passive);
        this.spellsQ.push(results[name].spells[0]);
        this.spellsW.push(results[name].spells[1]);
        this.spellsE.push(results[name].spells[2]);
        this.spellsR.push(results[name].spells[3]);
      }
    })
    .catch((error) => {
      console.log(error);
    });

    this.addChamp = () => {
      createService.addChampion(this.champObj)
      .then((data) => {
        console.log(data);
      });
    };

    function initChamp() {
      const champObj = {
        name: 'Jh0',
        image: 'JH.jpg',
        title: 'The Developer',
        enemytips: 'good luck',
        lore: 'No one knows where he came from',
        passivename: 'passive',
        passiveimage: 'passive.jpg',
        passivedescription: 'passive desc',
        spellsqname: 'Qspell',
        spellsqimage: 'Qspell.jpg',
        spellsqdescription: 'Qspell desc',
        spellswname: 'Wspell',
        spellswimage: 'Wspell.jpg',
        spellswdescription: 'Wspell desc',
        spellsename: 'Espell',
        spellseimage: 'Espell.jpg',
        spellsedescription: 'Espell desc',
        spellsrname: 'Rspell',
        spellsrimage: 'Rspell.jpg',
        spellsrdescription: 'Rspell desc'
      };
      return champObj;
    }

  }

})();
