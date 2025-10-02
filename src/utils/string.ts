export const toSlug = (str: string) =>
    str
        .normalize("NFD") // separa acentos
        .replace(/[\u0300-\u036f]/g, "") // remove acentos
        .replace(/ç/g, "c") // substitui cedilha
        .replace(/\s+/g, "-") // espaços viram "-"
        .toLowerCase();