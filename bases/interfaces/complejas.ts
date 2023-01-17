(() => {
    
    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress(id: string): string;
    }
    
    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Javi',
        age: 32,
        address: {
            id: 125,
            zip: '45280',
            city: 'Toledo'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

    const client2: Client = {
        name: 'Alba',
        age: 26,
        address: {
            id: 120,
            city: 'Ajaja',
            zip: '00000'
        },
        getFullAddress(id: string) {
            return this.address.city;
        }
    }

})()