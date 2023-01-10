(() => {
  type Vehiculo = {
    carroceria: string;
    modelo: string;
    antibalas: boolean;
    pasajeros: number;
    disparar?: () => void;
  }
  
  // Objetos
  const batimovil: Vehiculo = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  const bumblebee: Vehiculo = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  // Villanos debe de ser un arreglo de objetos personalizados
  type Villano = {
    nombre: string;
    edad?: number;
    mutante: boolean;
  }
  const villanos: Villano[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  type Charles = {
    poder: string;
    estatura: number;
  };
  
  type Apocalipsis = {
    lider: boolean;
    miembros: string[];
  }
  
  const charles: Charles = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  const apocalipsis: Apocalipsis = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique: Charles | Apocalipsis;
  
  mystique = charles;
  mystique = apocalipsis;
})()
