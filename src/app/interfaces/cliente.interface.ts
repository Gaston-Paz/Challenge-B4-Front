export interface Cliente{
    id?: number,
    nombres: string,
    apellidos: string,
    fechaNacimiento?: Date,
    fechaConvertida?: string,
    cuit: string,
    domicilio?: string,
    celular: string,
    email: string,
}