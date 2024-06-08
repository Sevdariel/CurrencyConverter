interface IErrorMessage {
    [key: number]: string;
}

export const ErrorMessages: IErrorMessage = {
    404: 'Brak danych dla wybranego zakresu czasowego',
    400: 'Źle sformułowane zapytanie',
}