import { Injectable } from '@angular/core';
import { Command } from 'protractor';
import { UF } from '../model/uf';

@Injectable({
  providedIn: 'root'
})
export class UfService {

  constructor() { }

  public getStates(){
    const states: UF[] = [];

    states.push({
      uf: `AC`,
      name: `Acre`
    })

    states.push({
      uf: `AL`,
      name: `Alagoas`
    })

    states.push({
      uf: `AP`,
      name: `Amapá`
    })

    states.push({
      uf: `AM`,
      name: `Amazonas`
    })

    states.push({
      uf: `BA`,
      name: `Bahia`
    })

    states.push({
      uf: `CE`,
      name: `Ceará`
    })

    states.push({
      uf: `DF`,
      name: `Distrito Federal`
    })

    states.push({
      uf: `ES`,
      name: `Espírito Santo`
    })

    states.push({
      uf: `GO`,
      name: `Goiás`
    })

    states.push({
      uf: `MA`,
      name: `Maranhão`
    })

    states.push({
      uf: `MT`,
      name: `Mato Grosso`
    })

    states.push({
      uf: `MS`,
      name: `Mato Grosso do Sul`
    })

    states.push({
      uf: `MG`,
      name: `Minas Gerais`
    })

    states.push({
      uf: `PA`,
      name: `Pará`
    })

    states.push({
      uf: `PB`,
      name: `Paraíba`
    })

    states.push({
      uf: `PR`,
      name: `Paraná`
    })

    states.push({
      uf: `PE`,
      name: `Pernambuco`
    })

    states.push({
      uf: `PI`,
      name: `Piauí`
    })

    states.push({
      uf: `RJ`,
      name: `Rio de Janeiro`
    })

    states.push({
      uf: `RN`,
      name: `Rio Grande do Norte`
    })

    states.push({
      uf: `RS`,
      name: `Rio Grande do Sul`
    })

    states.push({
      uf: `RO`,
      name: `Rondônia`
    })

    states.push({
      uf: `RR`,
      name: `Roraima`
    })

    states.push({
      uf: `SC`,
      name: `Santa Catarina`
    })

    states.push({
      uf: `SP`,
      name: `São Paulo`
    })

    states.push({
      uf: `SE`,
      name: `Sergipe`
    })

    states.push({
      uf: `TO`,
      name: `Tocantins`
    })

    return states;
  }


}
