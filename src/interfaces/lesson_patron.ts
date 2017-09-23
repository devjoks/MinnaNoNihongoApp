interface Patronoracion {
    oraciones: Oracione[];
    kanjis: Kanjis;
}

interface Kanjis {
    disponibles: number;
    kanji: Kanji[];
}

interface Kanji {
    kanji: string;
    furigana: string;
}

interface Oracione {
    patron: string;
}

export class MinnanoNihongo {

    constructor(
    leccion: number,
    patron_oracion: Patronoracion){}
}
