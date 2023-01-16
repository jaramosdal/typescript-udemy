(() => {
    class Avenger {
        constructor(
            public name: string, 
            public realName: string
        ) {
            // console.log('Constructor Avenger llamado!!!');
        }

        protected getFullname(){
            return `${this.name} ${this.realName}`
        }
    }

    class Xmen extends Avenger {
        constructor(
            name: string, 
            realName: string,
            public isMutant: boolean
        ){
            super(name, realName);
            // console.log('Constructor Xmen llamado!!!');
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {

            if (name.length < 3) {
                throw new Error('El name debe ser mayor de 3 letras.');
            }

            this.name = name;
        }

        getFullnameDesdeXmen(){
            // console.log(super.getFullname())
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    // console.log(wolverine);

    wolverine.fullName = 'Javi';
    // console.log(wolverine.fullName);
})()