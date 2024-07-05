import { Automovel } from "./Automovel";
import { Terrestre } from "./Terrestre";
import { Transporte } from "./Transporte";

const t1: Transporte = new Transporte(5);
t1.visualizar();

const tr1 = new Terrestre(5, 4, 100);
tr1.visualizar();

const aut1: Automovel = new Automovel(5, 4, 300, "Azul", 4, "GEN-4587", 6);
aut1.visualizar();
