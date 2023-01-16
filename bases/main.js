"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo salvado!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo conquistado!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
    printName(magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name: string;
    // private team: string;
    // public realName: string;
    Avenger.avgAge = 35;
    // const antman = new Avenger("Antman", "Capitán", 'Scott Lang');
    // console.log(antman)
    // console.log(antman.bio())
    // console.log(Avenger.getAvgAge())
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado!!!');
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            // console.log('Constructor Xmen llamado!!!');
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error('El name debe ser mayor de 3 letras.');
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            // console.log(super.getFullname())
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    wolverine.fullName = 'Javi';
    // console.log(wolverine.fullName);
})();
(() => {
    // Singleton
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis... el único');
            }
            return Apocalipsis.instance;
        }
        changeName(name) {
            this.name = name;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis2... el único');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis3... el único');
    console.log(apocalipsis1);
})();
//# sourceMappingURL=main.js.map